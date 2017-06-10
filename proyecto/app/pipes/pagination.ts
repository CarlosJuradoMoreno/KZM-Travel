import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'paginate'})
export class PaginationPipe implements PipeTransform {
  transform(value:any, itemPerPage:any, currentPage:any) {
    var newArray= new Array();
    for(var index=((currentPage-1)*(itemPerPage));index<itemPerPage*currentPage;index++){
      if(value[index]!=null){
          newArray[index-((currentPage-1)*(itemPerPage))]=value[index];
      }

    }
    return newArray;
  }
}
