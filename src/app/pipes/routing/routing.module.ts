import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingPipe } from './routing.pipe';

@NgModule({
  declarations: [RoutingPipe],
  imports: [CommonModule],
  exports: [RoutingPipe],
})
export class RoutingModule {}
