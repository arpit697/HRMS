import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAssetsInventoryRoutingModule } from './my-assets-inventory-routing.module';
import { MyAssetsInventoryComponent } from './my-assets-inventory.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';

const MATERIAL = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [MyAssetsInventoryComponent],
  imports: [
    CommonModule,
    MyAssetsInventoryRoutingModule,
    RuTableModule,
    ...MATERIAL,
  ],
})
export class MyAssetsInventoryModule { }
