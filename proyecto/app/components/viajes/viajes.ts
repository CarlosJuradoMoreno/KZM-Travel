import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
//platformBrowserDynamic().bootstrapModule(AppComponent, [Http]);
import {Observable} from 'rxjs/Rx';
//import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'viajes',
  templateUrl: './viajes.html',
  styleUrls: ['./viajes.css'],
  //directives: [ROUTER_DIRECTIVES]
})
export class ViajesComponent {

     constructor(private http:Http){
     }

     ngOnInit(){
     }
}
