import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDsrComponent } from './all-dsr.component';

const routes: Routes = [{ path: '', component: AllDsrComponent }, { path: ':id', loadChildren: () => import('./dsr/dsr.module').then(m => m.DsrModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllDsrRoutingModule { }
