import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training.component';
import {
  UPCOMING_TRAININGS,
  ONGOING_TRAININGS,
  MY_TRAININGS,
  REQUESTED_TRAININGS,
} from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    children: [
      {
        path: UPCOMING_TRAININGS.path,
        loadChildren: () =>
          import('./upcoming-trainings/upcoming-trainings.module').then(
            (m) => m.UpcomingTrainingsModule
          ),
      },
      {
        path: ONGOING_TRAININGS.path,
        loadChildren: () =>
          import('./ongoing-trainings/ongoing-trainings.module').then(
            (m) => m.OngoingTrainingsModule
          ),
      },
      {
        path: MY_TRAININGS.path,
        loadChildren: () =>
          import('./my-trainings/my-trainings.module').then(
            (m) => m.MyTrainingsModule
          ),
      },
      {
        path: REQUESTED_TRAININGS.path,
        loadChildren: () =>
          import('./requested-trainings/requested-trainings.module').then(
            (m) => m.RequestedTrainingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
