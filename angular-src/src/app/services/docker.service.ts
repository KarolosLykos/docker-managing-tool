import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class DockerService {
stats:any
  constructor(
  		private http:Http
  	) { }


  getContainersList(){
  	let headers = new Headers()
  	headers.append('Content-Type','application/json')
  	return this.http.get('http://localhost:3000/docker/containers/list',{headers: headers})
  	.map(res => res.json())
  }

  getImageList(){
  	let headers = new Headers()
  	headers.append('Content-Type','application/json')
  	return this.http.get('http://localhost:3000/docker/images/list',{headers: headers})
  	.map(res => res.json())
  }

  getContainerTop(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.get('http://localhost:3000/docker/container/top',{params: {id: id},headers: headers})
    .map(res => res.json())
  }

  getContainerLogs(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.get('http://localhost:3000/docker/container/logs',{params: {id: id},headers: headers})
    .map(res => res.json())
  }

  getContainerStatus(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.get('http://localhost:3000/docker/container/status',{params: {id: id},headers: headers})
    .map(res => res.json())
  }

  getContainerInfo(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/docker/container/info',{params: {id: id},headers: headers})
    .map(res => res.json())
  }

  createContainer(name,image,tag){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/docker/container/create',
      {params: {
        name: name,
        image: image,
        tag: tag},headers: headers})
    .map(res => res.json())
  }

  startContainer(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/docker/container/start',{params: {id: id},headers: headers})
    .map(res => res.json())
  }

  restartContainer(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/docker/container/restart',{params: {id: id},headers: headers})
    .map(res => res.json())
  }

  stopContainer(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/docker/container/stop',{params: {id: id},headers: headers})
    .map(res => res.json())
  }

  deleteContainer(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.delete('http://localhost:3000/docker/container/delete',{params: {id: id},headers: headers})
    .map(res => res.json())
  }
}
