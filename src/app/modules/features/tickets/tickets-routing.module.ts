import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { MY_TICKETS, TICKET_DETAILS } from 'src/app/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    children: [
      {
        path: MY_TICKETS.path,
        loadChildren: () =>
          import('./my-tickets/my-tickets.module').then(
            (m) => m.MyTicketsModule
          ),
      },
      {
        path: `${TICKET_DETAILS.path}/:id`,
        loadChildren: () =>
          import('./ticket-details/ticket-details.module').then(
            (m) => m.TicketDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
