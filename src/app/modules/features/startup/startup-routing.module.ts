import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupComponent } from './startup.component';
import { ADD_PITCH, MY_IDEA } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: StartupComponent,
    children: [
      {
        path: ADD_PITCH.path,
        loadChildren: () =>
          import('./add-pitch/add-pitch.module').then((m) => m.AddPitchModule),
      },
      {
        path: MY_IDEA.path,
        loadChildren: () =>
          import('./my-idea/my-idea.module').then((m) => m.MyIdeaModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartupRoutingModule {}
