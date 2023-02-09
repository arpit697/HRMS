import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ShiftComponent } from './shift/shift.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RuButtonModule } from '../../common/modules/ru-button/ru-button.module';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const MATERIAL = [
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [
    ProfileComponent,
    BasicInfoComponent,
    ProfilePicComponent,
    QualificationComponent,
    ShiftComponent,
    ChangePassComponent,
    AppraisalComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    RuButtonModule,
    ...MATERIAL,
  ],
})
export class ProfileModule {}
