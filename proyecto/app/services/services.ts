import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
//platformBrowserDynamic().bootstrapModule(AppComponent, [Http]);
import {Observable} from 'rxjs/Rx';

@Injectable()

export class ServicesService {
  private url="http://localhost:80";
  private data;
     constructor(private http:Http){

       this.http.get(this.url)
                  .subscribe(data =>this.data=data.json(),
                    err => console.error("error"+err));

     }
     getData(){

    return this.http.get(this.url)
               .subscribe(data =>this.data=data.json(),
                 err => console.error("error"+err));

     }

     returnData(data){
       console.log(data+" DATA");
       return data;
     }

}
