import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikedResourcesComponent } from './liked-resources.component';

const routes: Routes = [{ path: '', component: LikedResourcesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikedResourcesRoutingModule { }
