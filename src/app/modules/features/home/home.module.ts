import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { RuJobCardModule } from '../../common/modules/ru-job-card/ru-job-card.module';

const MATERIAL = [MatCardModule ];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule , RuJobCardModule , ...MATERIAL],
})
export class HomeModule {}
