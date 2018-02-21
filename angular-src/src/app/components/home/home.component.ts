import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../services/docker.service'
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  containers:object
  images:object 
  titles:any
  processes:any
  msg:any 

  constructor(
  	  private dockerService: DockerService, 
      private notificationsService: NotificationsService,
      private router: Router
  	) { }

  ngOnInit() {
  	this.dockerService.getContainersList().subscribe( data => {
  		if(data.success){
  			
  			this.containers = data.data
  		}else{
  			this.notificationsService.success('Error',data.msg, { timeOut: 3000, clickToClose: true });
  		}
  	})

  	this.dockerService.getImageList().subscribe( data => {
		if(data.success){
			console.log(data)
  			this.images = data.data
  		}else{
  			this.notificationsService.success('Error',data.msg, { timeOut: 3000, clickToClose: true });
  		}
  	})
  }

  containerInfo(id){
		this.router.navigate(['/container', {id:id}]);
	}

}
