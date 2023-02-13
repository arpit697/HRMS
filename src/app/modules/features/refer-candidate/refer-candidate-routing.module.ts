import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferCandidateComponent } from './refer-candidate.component';

const routes: Routes = [
  { path: '', component: ReferCandidateComponent },
  {
    path: 'job-openings',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferCandidateRoutingModule {}
