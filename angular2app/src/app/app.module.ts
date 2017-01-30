import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, BaseRequestOptions} from '@angular/http';
import {CommonModule} from '@angular/common'

import {MaterialModule} from '@angular/material'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routing";
import {AuthGuard} from "./shared/interceptor/auth-guard";
import {AuthenticationService} from "./shared/service/AuthenticationService";
import {UserService} from "./shared/service/UserService";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
