import { Pipe, PipeTransform } from '@angular/core';
import { NUMBER_WORDS } from 'src/app/constant/app-constant';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  transform(value: any): unknown {
    if(value >=0){
      return NUMBER_WORDS[value]
    }
    return null;


  }

}
