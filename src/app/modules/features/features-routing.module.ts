import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import {
  DIRECTORY,
  ENTREPRENURSHIP,
  HOME,
  PROFILE,
  REFER_CANDIDATE,
} from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
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
        path: ENTREPRENURSHIP.path,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
