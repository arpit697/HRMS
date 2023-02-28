import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferCandidateComponent } from './refer-candidate.component';
import { JOB_OPENINGS } from 'src/app/constants/routes';

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
        path: 'job-details/:id',
        loadChildren: () =>
          import('./job-details/job-details.module').then(
            (m) => m.JobDetailsModule
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
