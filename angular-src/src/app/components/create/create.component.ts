import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { DockerService } from '../../services/docker.service'
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name: String
  image: String
  tag: String
  socket: SocketIOClient.Socket;
  logs: any
  loading:any

  constructor(
  	  private notificationsService: NotificationsService,
      private dockerService: DockerService, 
      private router: Router
  	) { this.socket = io.connect('http://localhost:3000/create') }

  ngOnInit() {
    this.loading = false
  }

  onCreateSubmit(){


  	if(this.tag === undefined){
  		this.tag = ''
  	}
  	if( this.name === undefined || this.image === undefined ){
  		this.notificationsService.error('Error','Field Name and Image not optional', { timeOut: 3000, clickToClose: true });
      
  	} else {      
      this.loading = true
  		this.dockerService.createContainer(this.name,this.image,this.tag)
	    .subscribe( data => {
	      if(data.success){
	        this.notificationsService.success('Success',data.msg, { timeOut: 3000, clickToClose: true });
	        this.router.navigate(['/']);
	      }else{
	        this.notificationsService.error('Error',data.msg, { timeOut: 3000, clickToClose: true });
	        this.router.navigate(['/']);
	      }
	    })

	    return true
  	}

     // this.socket.on('create', (data: any) => {
     //    this.logs = data
     //    })

    
  }
}
