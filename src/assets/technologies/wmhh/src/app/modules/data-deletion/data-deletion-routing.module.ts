import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataDeletionComponent } from './data-deletion.component';

const routes: Routes = [{ path: '', component: DataDeletionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDeletionRoutingModule { }
