import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetClassesAndAttributeDirective } from './get-classes-and-attribute.directive';



@NgModule({
  declarations: [GetClassesAndAttributeDirective],
  imports: [
    CommonModule
  ],exports:[GetClassesAndAttributeDirective]
})
export class GetClassesAndAttributeModule { }
