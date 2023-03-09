import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreshersComponent } from './freshers.component';
import { FRESHERS_TRAININGS, MY_TRAININGS } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: FreshersComponent,
    children: [
      {
        path: FRESHERS_TRAININGS.path,
        loadChildren: () =>
          import('./my-training/my-training.module').then(
            (m) => m.MyTrainingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreshersRoutingModule {}
