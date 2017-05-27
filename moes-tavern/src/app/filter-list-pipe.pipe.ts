import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})

export class FilterListPipePipe implements PipeTransform {

  transform(value: any, args: string):any {

    if (!args) {
      return value;
    } 
    
    if (value) {
      return value.filter(item => {

          if (item.brewery.toLowerCase().indexOf(args.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(args.toLowerCase()) > -1 ) {
            return true;
          }

          return false;
      });
    }
  }
}
