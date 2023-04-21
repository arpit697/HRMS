import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyIdeaRoutingModule } from './my-idea-routing.module';
import { MyIdeaComponent } from './my-idea.component';
import { MatCardModule } from '@angular/material/card';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';

const MATERIAL  = [
  MatCardModule
]

@NgModule({
  declarations: [
    MyIdeaComponent
  ],
  imports: [
    CommonModule,
    MyIdeaRoutingModule,
    RuTableModule,
    ...MATERIAL
  ]
})
export class MyIdeaModule { }
