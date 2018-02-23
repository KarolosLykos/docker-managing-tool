import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../services/docker.service'
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import "rxjs/add/operator/takeWhile";

import * as io from 'socket.io-client';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
   private sub: any;
   id:any	  	
   titles: any
   processes: any
   socket: SocketIOClient.Socket;
   info:any
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
        this.socket = io.connect('http://localhost:3000/logs')
      }

  ngOnInit() {


    this.dockerService.getContainerLogs(this.id)
    .takeWhile(() => this.alive)
    .subscribe( data => {
      if(data.success){
        this.notificationsService.success('Success',data.msg, { timeOut: 3000, clickToClose: true });
      }else{
        this.notificationsService.error('Error',data.msg, { timeOut: 3000, clickToClose: true });
      }
    })

    this.socket.on('logs', (data: any) => {
    	console.log(data)
          this.info = data.info
        })
  }
}
