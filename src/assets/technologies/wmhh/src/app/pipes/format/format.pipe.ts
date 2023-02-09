import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: any, position?: string): any {
    if (value || value === 0 || value === false) {
      if (position && typeof position === 'string' && position.indexOf('$$') >= 0) {
        return position.replace('$$', value);
      }
      return value;
    }
    return 'N/A';
  }

}
