import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAssetsInventoryRoutingModule } from './my-assets-inventory-routing.module';
import { MyAssetsInventoryComponent } from './my-assets-inventory.component';


@NgModule({
  declarations: [
    MyAssetsInventoryComponent
  ],
  imports: [
    CommonModule,
    MyAssetsInventoryRoutingModule
  ]
})
export class MyAssetsInventoryModule { }
