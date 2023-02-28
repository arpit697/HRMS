import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews.component';
import { MY_PERFORMANCE } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent,
    children: [
      {
        path: MY_PERFORMANCE.path,
        loadChildren: () =>
          import('./my-performance/my-performance.module').then(
            (m) => m.MyPerformanceModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule {}
