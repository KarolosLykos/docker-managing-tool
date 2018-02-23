import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { DockerService } from './services/docker.service';
import { ContainerComponent } from './components/container/container.component';
import { LogsComponent } from './components/logs/logs.component';
import { ActionsComponent } from './components/actions/actions.component';
import { CreateComponent } from './components/create/create.component'

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'container', component:ContainerComponent},
  {path:'logs', component:LogsComponent},
  {path:'actions', component:ActionsComponent},
  {path:'create', component:CreateComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    ContainerComponent,
    LogsComponent,
    ActionsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    MaterializeModule,
  ],
  providers: [DockerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
