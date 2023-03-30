import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingRoutingModule } from './my-training-routing.module';
import { MyTrainingComponent } from './my-training.component';
import { RuTrainingCardModule } from 'src/app/modules/common/modules/common-training-card/ru-training-card.module';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [MatCardModule];

@NgModule({
  declarations: [MyTrainingComponent],
  imports: [
    CommonModule,
    MyTrainingRoutingModule,
    RuTrainingCardModule,
    ...MATERIAL,
  ],
})
export class MyTrainingModule { }
