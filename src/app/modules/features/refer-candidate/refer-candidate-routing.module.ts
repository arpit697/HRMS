import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferCandidateComponent } from './refer-candidate.component';
import {
  CANDIDATE_PROFILE,
  JOB_DETAILS,
  JOB_OPENINGS,
} from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: ReferCandidateComponent,
    children: [
      {
        path: JOB_OPENINGS.path,
        loadChildren: () =>
          import('./job-openings/job-openings.module').then(
            (m) => m.JobOpeningsModule
          ),
      },
      {
        path: 'referral-list',
        loadChildren: () =>
          import('./referral-list/referral-list.module').then(
            (m) => m.ReferralListModule
          ),
      },
      {
        path: `${JOB_DETAILS.path}/:id`,
        loadChildren: () =>
          import('./job-details/job-details.module').then(
            (m) => m.JobDetailsModule
          ),
      },
      {
        path: `${CANDIDATE_PROFILE.path}/:id`,
        loadChildren: () =>
          import('./candidate-profile/candidate-profile.module').then(
            (m) => m.CandidateProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferCandidateRoutingModule {}
