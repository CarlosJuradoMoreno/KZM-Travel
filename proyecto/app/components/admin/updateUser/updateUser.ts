import {Http, Response} from '@angular/http';
import {Injectable, Component, Input, EventEmitter, Output } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Rx';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'updateUser',
  templateUrl: './updateUser.html',
  styleUrls: ['./updateUser.css']
})
export class UpdateUserComponent {
  private ready:boolean=false;
  private url;
  private array;
  private edit;
  private fail:boolean=false;
  private server="http://kzmtravel.esy.es";

  @Input() id;
  

  @Output() isEditing = new EventEmitter();



  constructor(private http:Http){

  }
 ngOnInit(){

   this.url=this.server+"/php/?function=getOneUser&ID="+this.id;
   this.http.get(this.url)
              .subscribe(data =>{this.array=data.json()
                this.ready=true;},
                err => console.error("error"+err));
 }
 updateUser(email,password,tipo,telefono){
   this.url=this.server+"/php/?function=updateUser&ID="+this.id+"&EMAIL="+email+"&PASSWORD="+password+"&TIPO="+tipo+"&TELEFONO="+telefono;
   this.http.get(this.url)
              .subscribe(data =>{ this.edit=data.json()
                if(this.edit=="true"){
                  this.exit();
                }else{
                    this.fail=true;
                };},
                err => console.error("error"+err));
 }
 
 exit(){
   this.isEditing.emit(true);
 }
}
