import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PATTERN_ERRORS } from 'src/app/constants/validations/pattern.errors';

@Pipe({
  name: 'validationCheck' , 
  pure: false
})
export class ValidationCheckPipe implements PipeTransform {

  transform(control: FormControl, name: string): any {
    return control && control.errors
      ? this.getValidationError(control, name)
      : '';
  }
  getValidationError(control: FormControl, name: string): any {
    if (control.hasError('required')) {
      return `${name} is required`;
    }
    if (control.hasError('pattern')) {
      //@ts-ignore
      let pattern = control.errors.pattern.requiredPattern;
      return PATTERN_ERRORS(pattern, name);
    }
    if (control.hasError('minlength')) {
      return `${name} must be at least ${
        //@ts-ignore
        control.errors.minlength.requiredLength
      } characters long`;
    }
    if (control.hasError('minMatch')) {
      return `${name} must be at least ${
        //@ts-ignore
        control.errors.minMatch.requiredLength
      } digit long`;
    }
    if (control.hasError('min')) {
      //@ts-ignore
      return `${name} must be at least ${control.errors.min.min} `;
    }
    if (control.hasError('maxlength')) {
      return `${name} can not be more than ${
        //@ts-ignore
        control.errors.maxlength.requiredLength
      } characters long`;
    }
    if (control.hasError('maxMatch')) {
      return `${name} can not be more than ${
        //@ts-ignore
        control.errors.maxMatch.requiredLength
      } digit long`;
    }
    if (control.hasError('max')) {
      return `${name} can not be more than ${
        //@ts-ignore
        control.errors.max.max
      } `;
    }
    if (control.hasError('maxError')) {
      return `Maximum ${name} can not be less than minimum ${name}`;
    }
  }

}
