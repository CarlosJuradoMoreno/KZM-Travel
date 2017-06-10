import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'confort',
  templateUrl: './confort.html',
  styleUrls: ['./confort.css'],
})
export class ConfortComponent {

private texto="";
private contador=0;
private array = new Array("Bienvenido","Hoy vas a ampliar tu zona de confort","¿Estas preparado?",
                    "Solamente tienes que decirnos 2 cosas y lo demas lo elegiremos por ti");
//DESTINO SALIDA
//BUSCAR

//SPIN
private text5="Enhorabuena, vas a descubrir (ciudad), quieres reservarlo";
private timer;

private provider;              //provider del selector
private server="http://kzmtravel.esy.es";
private finAnimacion:boolean =false;
private stringToFilter:string="";

private cantidadMaxima;
private salida="";         //return del selector
private listadoReservas;

private finIntro:boolean = false;
private errorCantidad:boolean=false;
private errorBusqueda:boolean=false;
private confortEncontrado:boolean=false;
private errorNoLogeado:boolean=false;
private resultadoReserva:boolean=false;
private listadoReservasReady:boolean=false;

     constructor(private http:Http){
       
     }

     ngOnInit(){
       this.empezarAnimacion();
     }
     empezarAnimacion(){
     this.timer= setTimeout(()=>{ 
       if(this.contador<4){
       this.nextText(); 
       this.empezarAnimacion()
      }else{
        //Empezar con los cuadros
        this.finIntro=true;
        this.finAnimacion=true;
        //reiniciar contador
      }
       //fin funcion
       ;}, 5000);
     }
     nextText(){
      this.texto=this.array[this.contador];
      this.contador++;
     }

      reiniciar(){
        this.contador=0;
        this.empezarAnimacion();
        this.finIntro=false;
        this.finAnimacion=false;
        this.resultadoReserva=false;
        this.listadoReservasReady=false;
        this.reiniciarBusqueda();
      }
      skipIntro(){
        this.contador=4;
      }
      guardaDatos(salidaSeleccionada, cantidadMaxima){
       this.cantidadMaxima=cantidadMaxima;
       this.salida=salidaSeleccionada;
       if(cantidadMaxima<=0){
         this.errorCantidad=true;
       }else{
      var url = this.server+"/php/?function=getRandomConfort&SALIDA="+salidaSeleccionada+"&PRECIO="+cantidadMaxima;
       console.log(url);
       this.http.get(url)
              .subscribe(data =>{ 
                this.provider=data.json();
                if(this.provider[0]!=false){
               this.confortEncontrado=true;
               this.errorBusqueda=false;

                }else{
                  this.errorBusqueda=true;
                }
                  },
                err => console.error("error"+err));
       }
      }

      reservaConfort(confort, notas){
        var userID= sessionStorage.getItem("user");
        if(userID==null){
          this.errorNoLogeado=true;
        }else{
          this.errorNoLogeado=false;
          var url = this.server+"/php/?function=reservaConfort&confortID="+confort.ID+"&userID="+userID+"&notas="+notas;
         
          this.http.get(url)
              .subscribe(data =>{ 
                this.resultadoReserva=data.json();
                console.log(this.resultadoReserva);
                if(this.resultadoReserva){
                  this.listarReservas();
                }
                  },
                err => console.error("error"+err));
        }
      }
      reiniciarBusqueda(){
         this.confortEncontrado=false;
          this.provider="";
      }

      listarReservas(){
          var url = this.server+"/php/?function=listarReservas&ID="+sessionStorage.getItem("user");
         
          this.http.get(url)
              .subscribe(data =>{ 
                this.listadoReservas=data.json();
                this.listadoReservasReady=true;
                  },
                err => console.error("error"+err));
      }
}
