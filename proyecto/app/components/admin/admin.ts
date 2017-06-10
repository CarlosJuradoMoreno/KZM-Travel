import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Rx';

@Component({
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent {

  private array;
  private server="http://kzmtravel.esy.es";
  private ready:boolean=false;
  private checked:boolean=false;
  private email="";
  private pass="";
  private fail:boolean=false;
  constructor(private http:Http){
  }
 ngOnInit(){
   /*this.http.get(this.url)
              .subscribe(data =>{this.array=data.json()
                this.ready=true;},
                err => console.error("error"+err));*/
 }

 checkUser(email:string,pass:string){
   this.email=email;
   this.pass=pass;
   var url=this.server+'/php/?function=checkUserAdmin&email='+this.email+'&pass='+this.pass;

   this.http.get(url)
              .subscribe(data =>{this.array=data.json()
              if(this.array[0]=="true"){
                this.checked=true;
                this.fail=false;

              }else{
                  this.fail=true;
              };},
                err => console.error("error"+err));

 }
}
