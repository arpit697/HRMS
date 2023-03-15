import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL = [MatCardModule, MatButtonModule];

@NgModule({
  declarations: [MyTrainingsComponent],
  imports: [CommonModule, MyTrainingsRoutingModule, ...MATERIAL],
})
export class MyTrainingsModule {}
