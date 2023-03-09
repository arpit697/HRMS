import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './leave.component';
import { MY_LEAVES, FLOATING_LEAVES } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: LeaveComponent,
    children: [
      {
        path: MY_LEAVES.path,
        loadChildren: () =>
          import('./my-leaves/my-leaves.module').then((m) => m.MyLeavesModule),
      },
      {
        path: FLOATING_LEAVES.path,
        loadChildren: () =>
          import('./floating-leaves/floating-leaves.module').then(
            (m) => m.FloatingLeavesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRoutingModule {}
