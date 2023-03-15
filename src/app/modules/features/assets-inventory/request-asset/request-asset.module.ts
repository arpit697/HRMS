import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetRoutingModule } from './request-asset-routing.module';
import { RequestAssetComponent } from './request-asset.component';
import { MatCardModule } from '@angular/material/card';
import { RuTableModule } from 'src/app/modules/common/modules/ru-table/ru-table.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [RequestAssetComponent],
  imports: [
    CommonModule,
    RequestAssetRoutingModule,
    RuTableModule,
    ...MATERIAL,
  ],
})
export class RequestAssetModule {}
