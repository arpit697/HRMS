import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedResourcesComponent } from './saved-resources.component';

const routes: Routes = [{ path: '', component: SavedResourcesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedResourcesRoutingModule { }
