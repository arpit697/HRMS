import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDeclarationRoutingModule } from './asset-declaration-routing.module';
import { AssetDeclarationComponent } from './asset-declaration.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RuTableModule } from 'src/app/modules/common/modules/ru-table/ru-table.module';

const MATERIAL = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatSelectModule,
];

@NgModule({
  declarations: [AssetDeclarationComponent],
  imports: [
    CommonModule,
    AssetDeclarationRoutingModule,
    RuTableModule,
    ...MATERIAL,
  ],
})
export class AssetDeclarationModule {}
