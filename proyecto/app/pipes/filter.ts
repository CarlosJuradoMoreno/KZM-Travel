import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(value:Array<any>, stringToFilter, selectReady) {
    var newArray= new Array();
    var salida="zzz";
    if(selectReady){
   for (var i = 0; i < value.length; i++) {
       if(value[i]!=null){
           salida=value[i].SALIDA;
           console.log(salida);
        if( salida.indexOf(stringToFilter) >= 0){
            newArray.push(value[i]);
        }
          

         
       /* if(salida.search(new RegExp(stringToFilter))!=-1){
        }  */
      }
   }

    }
    console.log(stringToFilter);


    return newArray;
    
  }
}
