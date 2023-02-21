import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLinksComponent } from './my-links.component';
import { HOLIDAY_CALENDER, POLICY_DOCUMENTS } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: MyLinksComponent,
    children: [
      {
        path: HOLIDAY_CALENDER.path,
        loadChildren: () =>
          import('./holiday-calender/holiday-calender.module').then(
            (m) => m.HolidayCalenderModule
          ),
      },
      {
        path: POLICY_DOCUMENTS.path,
        loadChildren: () =>
          import('./policy-documents/policy-documents.module').then(
            (m) => m.PolicyDocumentsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLinksRoutingModule {}
