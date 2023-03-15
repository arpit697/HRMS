import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreshersRoutingModule } from './freshers-routing.module';
import { FreshersComponent } from './freshers.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';

@NgModule({
  declarations: [FreshersComponent, FeedbackDialogComponent],
  imports: [CommonModule, FreshersRoutingModule],
})
export class FreshersModule {}
