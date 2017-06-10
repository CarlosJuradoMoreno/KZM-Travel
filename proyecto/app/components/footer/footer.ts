import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class FooterComponent {

     constructor(private http:Http){
     }

     ngOnInit(){
     }
}
