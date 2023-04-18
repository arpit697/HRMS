import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
})
export class TicketDetailsComponent {
  ticketDetails = [
    { tag: 'Category', detail: 'Troubleshooting' },
    { tag: 'Subject', detail: 'VPN is not working' },
    { tag: 'Employee', detail: 'Arpit Dwivedi (AI1558)' },
    { tag: 'Priority', detail: 'Medium' },
    { tag: 'Date', detail: 'Mar-17-2023' },
  ];
}
