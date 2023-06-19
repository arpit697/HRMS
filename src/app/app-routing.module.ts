import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACCOUNT, FEATURES } from './constants/routes';
import { AuthGuard } from './guards/authGuard/auth.guard';
import { LognGuard } from './guards/loginGuard/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: ACCOUNT.path,
    pathMatch: 'full',
  },
  {
    path: ACCOUNT.path,
    // canActivate: [LognGuard],
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },

  {
    path: FEATURES.path,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
