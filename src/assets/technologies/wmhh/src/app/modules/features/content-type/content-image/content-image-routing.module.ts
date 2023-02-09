import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentImageComponent } from './content-image.component';

const routes: Routes = [{ path: '', component: ContentImageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class ContentImageRoutingModule { }
