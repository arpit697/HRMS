import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentQuizComponent } from './content-quiz.component';

const routes: Routes = [{ path: '', component: ContentQuizComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentQuizRoutingModule { }
