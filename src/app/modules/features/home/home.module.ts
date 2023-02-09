import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [MatCardModule];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule , ...MATERIAL],
})
export class HomeModule {}
