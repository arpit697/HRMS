import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value?: any): any {
if (value) {
    return value.toFixed(2);
  } else {
  return null;
    }
  }

}
