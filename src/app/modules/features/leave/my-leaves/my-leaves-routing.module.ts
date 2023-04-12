import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLeavesComponent } from './my-leaves.component';
import { LEAVE_DETAIL } from 'src/app/constants/routes';

const routes: Routes = [
  { path: '', component: MyLeavesComponent },
  {
    path: `${LEAVE_DETAIL.path}/:id`,
    loadChildren: () =>
      import('./leave-details/leave-details.module').then(
        (m) => m.LeaveDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLeavesRoutingModule {}
