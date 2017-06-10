import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Rx';
declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'usersTable',
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})
export class TableComponent {
  private array;
  private server="http://kzmtravel.esy.es";
  private otherData;
  private ready:boolean=false;
  private isEditing:boolean=false;
  private updateID;
  private datas;
  private currentPage=2;
  private itemsPerPage=10;
  private maxPagination;
  private paginationButtons= new Array();
  constructor(private http:Http){
  }
 ngOnInit(){
   this.load();

 }
  load(){
    var url=this.server+"/php/?function=getUsers";
    this.http.get(url)
               .subscribe(data =>{this.array=data.json()
                 this.maxPagination=this.array.length/this.itemsPerPage;
                 for(var i=0;i<this.maxPagination;i++){
                   this.paginationButtons[i]="hola";
                 }
                 this.ready=true;},
                 err => console.error("error"+err));
  }

 delete(id){
   var url=this.server+"/php/?function=deleteUser&ID="+id;
    this.http.get(url)
               .subscribe(() =>console.log("Deleted"),
                 err => console.error("error"+err));
   $("tr#row"+id).fadeOut();

 }
 edit(id){
   this.updateID=id;
   this.isEditing=true;
 }

 handleUserUpdated(user) {
     this.isEditing=false;
     this.load();
  }
  
  setPagination(page){
    this.currentPage=page+1;
  }


}
