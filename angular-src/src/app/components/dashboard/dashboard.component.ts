import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../services/docker.service'
import { NotificationsService } from 'angular2-notifications'
import { Http, Headers } from '@angular/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
loading:any
tag:any
filesToUpload: any;

  constructor(
    private notificationsService: NotificationsService,
    private dockerService: DockerService,
    private http:Http) { }

  ngOnInit() {
    this.loading = false
   }

   onFileSelection(fileInput) {
     this.filesToUpload = fileInput.target.files[0];
   }

   onSubmit(){
   	if( this.tag === undefined || this.filesToUpload === undefined){
   		this.notificationsService.error('Error','Field tag and tar not optional', { timeOut: 3000, clickToClose: true });
   	} else if (this.filesToUpload.type !== 'application/x-tar') {
      this.notificationsService.error('Error','Input file must be tar', { timeOut: 3000, clickToClose: true });
    }else{
      this.loading = true
      const formData: any = new FormData();
      const file = this.filesToUpload;
      formData.append('tarFile', file, this.filesToUpload.name)
      let headers = new Headers()
      console.log(this.tag)
      this.dockerService.buildImage(formData,this.tag)
        .subscribe(files => console.log('files', files))

   	}
  }


}
