import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedResourcesComponent } from './completed-resources.component';

const routes: Routes = [{ path: '', component: CompletedResourcesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedResourcesRoutingModule { }
