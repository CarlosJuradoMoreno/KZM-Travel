import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'carrusel',
  templateUrl: './carrusel.html',
  styleUrls: ['./carrusel.css'],
})
export class CarruselComponent {


     constructor(private http:Http){
     }


   
}
