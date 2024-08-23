import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLeavesRoutingModule } from './my-leaves-routing.module';
import { MyLeavesComponent } from './my-leaves.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import { RuTableModule } from 'src/app/modules/common/modules/common-table/ru-table.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { LeaveRollbackDialogComponent } from '../../includes/utilities/popups/leave-rollback/leave-rollback-dialog.component';

const MATERIAL = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatListModule,
  NgxMaterialTimepickerModule,
];

@NgModule({
  declarations: [MyLeavesComponent, LeaveRollbackDialogComponent],
  imports: [
    CommonModule,
    MyLeavesRoutingModule,
    RuTableModule,
    ReactiveFormsModule,
    FormsModule,
    ...MATERIAL,
  ],
})
export class MyLeavesModule {}
