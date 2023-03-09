import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitmentComponent } from './recruitment.component';
import { INTERVIEWS } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: RecruitmentComponent,
    children: [
      {
        path: INTERVIEWS.path,
        loadChildren: () =>
          import('./interviews/interviews.module').then(
            (m) => m.InterviewsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruitmentRoutingModule {}
