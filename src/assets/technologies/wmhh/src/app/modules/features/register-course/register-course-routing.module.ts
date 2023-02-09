import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCourseComponent } from './register-course.component';

const routes: Routes = [{ path: '', component: RegisterCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCourseRoutingModule { }
