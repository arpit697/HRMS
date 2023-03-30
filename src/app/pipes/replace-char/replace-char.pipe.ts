import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceChar'
})
export class ReplaceCharPipe implements PipeTransform {
  transform(value: string, replaceChar: string, replacementChar: string): string {
    if (replaceChar === 'A') {
      replaceChar = 'a';
    }
    return value.replace(new RegExp(replaceChar, 'g'), replacementChar);
  }
}