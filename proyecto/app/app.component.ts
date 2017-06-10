import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
//platformBrowserDynamic().bootstrapModule(AppComponent, [Http]);
import {Observable} from 'rxjs/Rx';
//import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {


  /*   private array;
     private url="http://localhost:80/php/?function=getUsers";
     private otherData;
     private ready:boolean=false;*/
     constructor(private http:Http){
     }


     ngOnInit(){
      /*this.http.get(this.url)
                  .subscribe(data =>{this.array=data.json()
                    this.ready=true;},
                    err => console.error("error"+err));*/

     }
}
