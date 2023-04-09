import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { OverviewComponent } from './overview/overview.component';
import { NotesComponent } from './notes/notes.component';
import { DsrReportComponent } from './dsr-report/dsr-report.component';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

const MATERIAL = [
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatDividerModule,
];

@NgModule({
  declarations: [
    DetailComponent,
    OverviewComponent,
    NotesComponent,
    DsrReportComponent,
  ],
  imports: [CommonModule, DetailRoutingModule, RuTableModule, ...MATERIAL],
})
export class DetailModule { }
