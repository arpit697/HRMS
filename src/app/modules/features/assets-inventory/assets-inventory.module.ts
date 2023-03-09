import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsInventoryRoutingModule } from './assets-inventory-routing.module';
import { AssetsInventoryComponent } from './assets-inventory.component';


@NgModule({
  declarations: [
    AssetsInventoryComponent
  ],
  imports: [
    CommonModule,
    AssetsInventoryRoutingModule
  ]
})
export class AssetsInventoryModule { }
