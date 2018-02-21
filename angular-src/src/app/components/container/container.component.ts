import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../services/docker.service'
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
   id:any	  	
   private sub: any;
   titles: any
   processes: any
   socket: SocketIOClient.Socket;
   read:any
   memory_stats:any
   cpu_stats:any
   stats:any


  constructor(
  		private route: ActivatedRoute,
  		private dockerService: DockerService, 
      private notificationsService: NotificationsService
  	) { 
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });

    this.socket = io.connect('http://localhost:3000/stats')
  }

  ngOnInit() {

  
  	this.dockerService.getContainerInfo(this.id).subscribe( data => {
		if(data.success){
			this.processes = data.data.Processes
			this.titles = data.data.Titles
		}else{
		 this.notificationsService.success('Error',data.data.json.message, { timeOut: 3000, clickToClose: true });
		}
  	})

  	
  }
  onStatsClicked(){
    this.dockerService.getContainerStatus(this.id).subscribe( data => {
    if(data.success){
        this.stats = JSON.parse(data.data)
        this.read = this.stats.read
        this.memory_stats = this.stats.memory_stats
        this.cpu_stats = this.stats.cpu_stats
      }else{
      this.notificationsService.success('Error',data.data.message, { timeOut: 3000, clickToClose: true });
      } 
    })

    

    
  }

  

}
