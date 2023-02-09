import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroductionComponent } from './course-introduction.component';

const routes: Routes = [{ path: '', component: CourseIntroductionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseIntroductionRoutingModule { }
