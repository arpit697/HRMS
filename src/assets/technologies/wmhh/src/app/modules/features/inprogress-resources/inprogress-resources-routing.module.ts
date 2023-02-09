import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InprogressResourcesComponent } from './inprogress-resources.component';

const routes: Routes = [{ path: '', component: InprogressResourcesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InprogressResourcesRoutingModule { }
