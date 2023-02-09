import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentVideoComponent } from './content-video.component';

const routes: Routes = [{ path: '', component: ContentVideoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentVideoRoutingModule { }
