import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestAssetComponent } from './request-asset.component';

const routes: Routes = [{ path: '', component: RequestAssetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestAssetRoutingModule { }
