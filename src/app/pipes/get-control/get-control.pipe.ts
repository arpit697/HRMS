import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'getControl'
})
export class GetControlPipe implements PipeTransform {

  transform(control: any, paths: string[]): null | any | FormControl {

    paths.reduce((fg: any, name: string) => {
      return fg.get(`${name}`);
    }, control) as unknown as FormControl

    return paths.reduce((fg: any, name: string) => {
      return fg.get(`${name}`);
    }, control) as unknown as FormControl;
  }

}
