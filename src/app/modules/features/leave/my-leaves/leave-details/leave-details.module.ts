import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveDetailsRoutingModule } from './leave-details-routing.module';
import { LeaveDetailsComponent } from './leave-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

const MATERIAL = [MatCardModule, MatListModule];

@NgModule({
  declarations: [LeaveDetailsComponent],
  imports: [CommonModule, LeaveDetailsRoutingModule, ...MATERIAL],
})
export class LeaveDetailsModule {}
