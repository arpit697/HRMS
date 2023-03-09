import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import {
  ASSETS_INVENTORY,
  ATTENDANCE,
  DIRECTORY,
  DSR,
  ENTREPRENEURSHIP,
  FINANCE,
  FRESHERS,
  HOME,
  LEAVE,
  MY_LINKS,
  PROFILE,
  PROJECTS,
  RECRUITMENT,
  REFER_CANDIDATE,
  REVIEWS,
  STARTUP,
  TICKETS,
  TRAINING,
} from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        redirectTo: HOME.path,
        pathMatch: 'full',
      },
      {
        path: HOME.path,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: PROFILE.path,
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: DIRECTORY.path,
        loadChildren: () =>
          import('./directory/directory.module').then((m) => m.DirectoryModule),
      },
      {
        path: ENTREPRENEURSHIP.path,
        loadChildren: () =>
          import('./entreprenurship/entreprenurship.module').then(
            (m) => m.EntreprenurshipModule
          ),
      },
      {
        path: REFER_CANDIDATE.path,
        loadChildren: () =>
          import('./refer-candidate/refer-candidate.module').then(
            (m) => m.ReferCandidateModule
          ),
      },
      {
        path: MY_LINKS.path,
        loadChildren: () =>
          import('./my-links/my-links.module').then((m) => m.MyLinksModule),
      },
      {
        path: FINANCE.path,
        loadChildren: () =>
          import('./finance/finance.module').then((m) => m.FinanceModule),
      },
      {
        path: REVIEWS.path,
        loadChildren: () =>
          import('./reviews/reviews.module').then((m) => m.ReviewsModule),
      },
      {
        path: STARTUP.path,
        loadChildren: () =>
          import('./startup/startup.module').then((m) => m.StartupModule),
      },
      {
        path: RECRUITMENT.path,
        loadChildren: () =>
          import('./recruitment/recruitment.module').then(
            (m) => m.RecruitmentModule
          ),
      },
      {
        path: FRESHERS.path,
        loadChildren: () =>
          import('./freshers/freshers.module').then((m) => m.FreshersModule),
      },
      {
        path: TRAINING.path,
        loadChildren: () =>
          import('./training/training.module').then((m) => m.TrainingModule),
      },
      {
        path: ASSETS_INVENTORY.path,
        loadChildren: () =>
          import('./assets-inventory/assets-inventory.module').then(
            (m) => m.AssetsInventoryModule
          ),
      },
      {
        path: ATTENDANCE.path,
        loadChildren: () =>
          import('./attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
      },
      {
        path: LEAVE.path,
        loadChildren: () =>
          import('./leave/leave.module').then((m) => m.LeaveModule),
      },
      {
        path: TICKETS.path,
        loadChildren: () =>
          import('./tickets/tickets.module').then((m) => m.TicketsModule),
      },
      {
        path: DSR.path,
        loadChildren: () => import('./dsr/dsr.module').then((m) => m.DsrModule),
      },
      {
        path: PROJECTS.path,
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
