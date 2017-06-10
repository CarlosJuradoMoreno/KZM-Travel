import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
//COMPONENTS

import { routing } from './app.routes';
import { navComponent } from './components/nav/nav';
import {ServicesService} from './services/services';
import {AdminComponent} from './components/admin/admin';
import {HomeComponent} from './components/home/home';
import {TableComponent} from './components/admin/table/table';
import {UpdateUserComponent} from './components/admin/updateUser/updateUser';
import {ViajesComponent} from './components/viajes/viajes';
import {ConfortComponent} from './components/confort/confort';
import {FooterComponent} from './components/footer/footer';
import {CarruselComponent} from './components/carrusel/carrusel';
import {RegistroComponent} from './components/registro/registro'


import {PaginationPipe} from './pipes/pagination';
import {FilterPipe} from './pipes/filter'

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    AdminComponent,
    HomeComponent,
    TableComponent,
    UpdateUserComponent,
    PaginationPipe,
    ViajesComponent,
    ConfortComponent,
    FooterComponent,
    CarruselComponent,
    FilterPipe,
    RegistroComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
