import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [MatCardModule];

@NgModule({
  declarations: [MyPerformanceComponent],
  imports: [CommonModule, MyPerformanceRoutingModule, MATERIAL],
})
export class MyPerformanceModule {}
