import { Component, EventEmitter, Output  } from '@angular/core';
import { Router, ActivatedRoute,  } from '@angular/router';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class navComponent {
  private array;
  private server="http://kzmtravel.esy.es";
  private email="";
  private pass="";
  private user;
  private cache;

  private checked:boolean=false;
  private ready:boolean=false;
  private fail:boolean=false;
  private registrateReady:boolean=false;

  private loginVisible=true;

  @Output() viaje = new EventEmitter();
  @Output() confort = new EventEmitter();
  constructor(private http:Http){

  }

  ngOnInit() {
   this.comprobarSesion();
  }

  toLogIn(email,pass){
    this.email=email;
    this.pass=pass;
    var url=this.server+'/php/?function=checkUser&email='+this.email+'&pass='+this.pass;
    console.log(url);
    this.http.get(url)
               .subscribe(data =>{this.array=data.json()
               if(this.array[0]=="true"){
                 this.user=this.array[1];
                 this.iniciarSesion(this.user);
                 this.checked=true;
                 this.fail=false;
               }else{
                   this.fail=true;
               };},
                 err => console.error("error"+err));
  }

  logOut(){
    this.checked=false;
    this.registrateReady=false;
    this.email="";
    this.pass="";
    this.user="";

    this.borrarSesion();
  }

  toViajes(){
    this.viaje.emit(true);
  }
  toConfort(){
    this.confort.emit(true);
  }

  iniciarSesion(user) {
    sessionStorage.setItem("user", user[0].ID);
    
}
 
comprobarSesion() {
   this.cache = sessionStorage.getItem("user");
     if(this.cache!=null){
     var url=this.server+'/php/?function=getOneUser&ID='+this.cache;
    this.http.get(url)
               .subscribe(data =>{this.array=data.json()
                 this.user=this.array;
                 this.iniciarSesion(this.user);
                 this.checked=true;
                 this.fail=false;
               },
                 err => console.error("error"+err));
     }
}
 
borrarSesion() {
    sessionStorage.removeItem("user");
}

registrate(){
  if(this.registrateReady){
  this.registrateReady=false;
  }else{
  this.registrateReady=true;
  }
}

seeLogin(){

  if(this.loginVisible){
  this.loginVisible=false;
  }else{
    this.loginVisible=true;
  }
}


}
