import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DockerService {

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

  getContainerInfo(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.get('http://localhost:3000/docker/container/top',{params: {id: id},headers: headers})
    .map(res => res.json())
  }

  getContainerStatus(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.get('http://localhost:3000/docker/container/status',{params: {id: id},headers: headers})
    .map(res => res.json())
  }
}
