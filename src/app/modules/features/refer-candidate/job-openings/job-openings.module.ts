import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningsRoutingModule } from './job-openings-routing.module';
import { JobOpeningsComponent } from './job-openings.component';
import { RuJobCardModule } from 'src/app/modules/common/modules/ru-job-card/ru-job-card.module';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [
  MatCardModule
]
@NgModule({
  declarations: [
                JobOpeningsComponent
  ],
  imports: [
    CommonModule,
    JobOpeningsRoutingModule,
    RuJobCardModule , 
    ...MATERIAL
  ]
})
export class JobOpeningsModule { }
