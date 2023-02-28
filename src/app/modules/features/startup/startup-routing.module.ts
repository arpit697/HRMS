import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupComponent } from './startup.component';

const routes: Routes = [
  {
    path: '',
    component: StartupComponent,
    children: [
      {
        path: 'add-pitch',
        loadChildren: () =>
          import('./add-pitch/add-pitch.module').then((m) => m.AddPitchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartupRoutingModule {}
