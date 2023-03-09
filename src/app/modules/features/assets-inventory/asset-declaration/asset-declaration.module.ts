import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDeclarationRoutingModule } from './asset-declaration-routing.module';
import { AssetDeclarationComponent } from './asset-declaration.component';


@NgModule({
  declarations: [
    AssetDeclarationComponent
  ],
  imports: [
    CommonModule,
    AssetDeclarationRoutingModule
  ]
})
export class AssetDeclarationModule { }
