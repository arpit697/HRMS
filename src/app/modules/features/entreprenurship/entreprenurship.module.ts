import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntreprenurshipRoutingModule } from './entreprenurship-routing.module';
import { EntreprenurshipComponent } from './entreprenurship.component';
import { RuButtonModule } from '../../common/modules/ru-button/ru-button.module';

const MATERIAL = [];

@NgModule({
  declarations: [EntreprenurshipComponent],
  imports: [CommonModule, EntreprenurshipRoutingModule, RuButtonModule],
})
export class EntreprenurshipModule {}
