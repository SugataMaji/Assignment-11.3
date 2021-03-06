import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case'
})
export class CasePipe implements PipeTransform {

  transform(value: any): any {
    if(value){
      const newval = value.substr(0, 1).toUpperCase() + value.substr(1, value.length).toLowerCase();
      return newval;
    }
    return value;
  }

}
