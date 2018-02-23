import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../services/docker.service'
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  private sub: any;
  id:any
  container:any


  constructor(
  	  private dockerService: DockerService, 
      private notificationsService: NotificationsService,
      private route: ActivatedRoute,
      private router: Router
  	) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
           this.id = params['id']; 
        })

    this.getContainerInfo(this.id)
  }

    private getContainerInfo(id){
      this.dockerService.getContainerInfo(id)
      .subscribe( data => {
        if(data.success){
          this.container = data.data
        }else{
          this.notificationsService.error('Error',data.msg, { timeOut: 3000, clickToClose: true });
        }
      })
    }
  

   startContainer(){
    this.dockerService.startContainer(this.id).subscribe( data => {
  		if(data.success){
        this.router.navigate(['/']);
        this.notificationsService.success('Success',data.msg, { timeOut: 3000, clickToClose: true });
  		}else{
  		 this.notificationsService.error('Error',data.msg, { timeOut: 3000, clickToClose: true });
  		}
  	})  	
  }
   restartContainer(){
   	this.dockerService.restartContainer(this.id).subscribe( data => {
  		if(data.success){
        this.router.navigate(['/']);
        this.notificationsService.success('Success',data.msg, { timeOut: 3000, clickToClose: true });
  		}else{
  		 this.notificationsService.error('Error',data.msg, { timeOut: 3000, clickToClose: true });
  		}
  	})  	
  }
   stopContainer(){
    this.dockerService.stopContainer(this.id).subscribe( data => {
  		if(data.success){
        this.router.navigate(['/']);
  			this.notificationsService.success('Success',data.msg, { timeOut: 3000, clickToClose: true });
  		}else{
  		 this.notificationsService.error('Error',data.msg, { timeOut: 3000, clickToClose: true });
  		}
  	})  	
  }
   deleteContainer(){
    this.dockerService.deleteContainer(this.id).subscribe( data => {
  		if(data.success){
  			this.notificationsService.error('Error',data.msg, { timeOut: 3000, clickToClose: true });
        this.router.navigate(['/']);
  		}else{
  		 	this.notificationsService.error('Error',data.msg, { timeOut: 3000, clickToClose: true });
  		}
  	})  	
  }

}
