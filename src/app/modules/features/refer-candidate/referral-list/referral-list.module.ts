import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralListRoutingModule } from './referral-list-routing.module';
import { ReferralListComponent } from './referral-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';

const MATERIAL = [MatCardModule  , MatButtonModule];

@NgModule({
  declarations: [ReferralListComponent],
  imports: [CommonModule, ReferralListRoutingModule, RuTableModule, ...MATERIAL],
})
export class ReferralListModule {}
