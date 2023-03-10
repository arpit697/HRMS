import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTrainingsComponent } from './my-trainings.component';

const routes: Routes = [{ path: '', component: MyTrainingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTrainingsRoutingModule { }
