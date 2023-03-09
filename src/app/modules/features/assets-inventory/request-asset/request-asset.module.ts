import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetRoutingModule } from './request-asset-routing.module';
import { RequestAssetComponent } from './request-asset.component';


@NgModule({
  declarations: [
    RequestAssetComponent
  ],
  imports: [
    CommonModule,
    RequestAssetRoutingModule
  ]
})
export class RequestAssetModule { }
