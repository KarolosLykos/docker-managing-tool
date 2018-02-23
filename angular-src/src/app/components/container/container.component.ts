import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../services/docker.service'
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from "@angular/core";
import { ISubscription } from "rxjs/Subscription";
import "rxjs/add/operator/takeWhile";

import * as io from 'socket.io-client';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
   private sub: any;
   id:any	  	
   titles: any
   processes: any
   socket: SocketIOClient.Socket;
   stat:any
   private subscription: ISubscription
   private alive: boolean = true;

  constructor(
  		private route: ActivatedRoute,
  		private dockerService: DockerService, 
      private notificationsService: NotificationsService,
  	) { 
        this.sub = this.route.params.subscribe(params => {
           this.id = params['id']; 
        })
        this.socket = io.connect('http://localhost:3000/stats')
      }

  ngOnInit() {


    this.dockerService.getContainerStatus(this.id)
    .takeWhile(() => this.alive)
    .subscribe( data => {
      if(data.success){
        this.notificationsService.success('Success',data.msg, { timeOut: 3000, clickToClose: true });
      }else{
        this.notificationsService.error('Error',data.msg, { timeOut: 3000, clickToClose: true });
      }
    })

    this.socket.on('stats', (data: any) => {
          this.stat = JSON.parse(data.stat)
        })

  	this.dockerService.getContainerTop(this.id).subscribe( data => {
  		if(data.success){
  			this.processes = data.data.Processes
  			this.titles = data.data.Titles
  		}else{
  		 this.notificationsService.error('Error',data.data.json.message, { timeOut: 3000, clickToClose: true });
  		}
  	})  	
  }
}
