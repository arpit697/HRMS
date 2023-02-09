import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { FORGOT_PASSWORD, LOGIN } from 'src/app/constants/routes';

const routes: Routes = [
  { path: '', redirectTo: `${LOGIN.path}`, pathMatch: 'full' },
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: `${LOGIN.path}`,
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: `${FORGOT_PASSWORD.path}`,
        loadChildren: () =>
          import('./forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
