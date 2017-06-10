import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {

     private array;
     private server="http://kzmtravel.esy.es";
     private otherData;
     private ready:boolean=false;
     private confort:boolean=false;
     private viajes:boolean=true;
     private conected;
     constructor(private http:Http){
     }


     ngOnInit(){
      /*var url=this.server+"/php/?function=isConected";
       this.http.get(url)
                  .subscribe(data =>{this.array=data.json()
                    this.conected=true;},
                    err => console.error("error"+err));*/



     }
     handleViaje(event){
       this.viajes=true;
       this.confort=false;
     }
     handleConfort(event){
       this.viajes=false;
       this.confort=true;
     }
}
