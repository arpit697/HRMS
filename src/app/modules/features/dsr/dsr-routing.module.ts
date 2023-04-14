import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsrComponent } from './dsr.component';
import { EDIT, MY_DSR } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: DsrComponent,
    children: [
      {
        path: MY_DSR.path,
        loadChildren: () =>
          import('./my-dsr/my-dsr.module').then((m) => m.MyDsrModule),
      },
      {
        path: `${EDIT.path}/:id`,
        loadChildren: () =>
          import('./edit/edit.module').then((m) => m.EditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DsrRoutingModule {}
