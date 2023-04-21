import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailsRoutingModule } from './job-details-routing.module';
import { JobDetailsComponent } from './job-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { TermsAndConditionsComponent } from '../../includes/utilities/popups/job-detail-t&c/terms-and-conditions.component';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL = [
  MatCardModule,
  MatIconModule,
  MatDividerModule,
  MatGridListModule,
  MatDialogModule,
];

@NgModule({
  declarations: [JobDetailsComponent, TermsAndConditionsComponent],
  imports: [CommonModule, JobDetailsRoutingModule, ...MATERIAL],
})
export class JobDetailsModule {}
