import {Http, Response} from '@angular/http';
import { Component, EventEmitter, Output  } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'registro',
  templateUrl: './registro.html',
  styleUrls: ['./registro.css'],
})
export class RegistroComponent {

private server="http://kzmtravel.esy.es";

  @Output() registrado = new EventEmitter();

private resultadoRegistro;

     constructor(private http:Http){
     }

     registrarUsuario(email,password,telefono){

       if(email!=""&&password!=""&&telefono!=""){
    var url=this.server+'/php/?function=registrarUsuario&EMAIL='+email+'&PASSWORD='+password+'&TELEFONO='+telefono;
    this.http.get(url)
               .subscribe(data =>{this.resultadoRegistro=data.json()
                 if(this.resultadoRegistro!=false){
                 sessionStorage.setItem("user", this.resultadoRegistro.ID);
                 this.registrado.emit(true);
                 }else{
                 }
               },
                 err => console.error("error"+err));

       }else{
      console.log(email+password+telefono);
         
       }

     }


   
}
