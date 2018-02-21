import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../services/docker.service'
import * as io from 'socket.io-client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	// messageText: string;
 //    messages: Array<any>;
    // socket2: SocketIOClient.Socket;
    // socket: SocketIOClient.Socket;

  constructor(private dockerService: DockerService) {
  	// this.socket2 = io.connect('http://localhost:3000/my-namespace2')
    // this.socket = io.connect('http://localhost:3000/my-namespace')
  }

  ngOnInit() {

    // this.dockerService.getContainerStatus('613c65fb9a71346fe1c21912cf8ad07f87517043dd96afda3e49f831fe741acd').subscribe( data => {
    // if(data.success){
      // this.processes = data.data.Processes
      // this.titles = data.data.Titles
      //  console.log(data)
      // }else{
      // this.notificationsService.success('Error',data.data.json.message, { timeOut: 3000, clickToClose: true });
    //     console.log(data)
    //   } 
    // })

      // this.socket2.on('event2', function(data) { 
      //     console.log(data);
      //   })
      // this.socket.on('event1', function(data) { 
      //     console.log(data);
      //   })

      // this.socket.on('connect', function(){
      //   console.log("SOCKET CLIENT CONNECT")
      // });
   }
}
