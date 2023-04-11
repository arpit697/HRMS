import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food.component';
import { LUNCH, DINNER } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: FoodComponent,
    children: [
      {
        path: LUNCH.path,
        loadChildren: () =>
          import('./lunch/lunch.module').then((m) => m.LunchModule),
      },
      {
        path: DINNER.path,
        loadChildren: () =>
          import('./dinner/dinner.module').then((m) => m.DinnerModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRoutingModule {}
