import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuButtonComponent } from './ru-button.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [RuButtonComponent],
  imports: [CommonModule , MatIconModule],
  exports: [RuButtonComponent],
})
export class RuButtonModule {}
