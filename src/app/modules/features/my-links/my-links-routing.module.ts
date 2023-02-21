import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLinksComponent } from './my-links.component';

const routes: Routes = [{ path: '', component: MyLinksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLinksRoutingModule { }
