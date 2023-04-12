import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.scss'],
})
export class LeaveDetailsComponent implements OnInit {
  constructor(private _route: ActivatedRoute , private dataService :DataService) {}
  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      console.log(params , this.dataService);
    });
  }
  leaveDetail = [
    { tag: 'Employee Name', detail: 'Arpit Dwivedi (AI1558)' },
    { tag: 'Leave Type', detail: 'Short Leaves' },
    { tag: 'Leave Duration', detail: '5:00 PM - 7:00 PM' },
    { tag: 'Applied Duration', detail: 'Mar-17-2023' },
    { tag: 'Start Date', detail: 'Mar-17-2023' },
    { tag: 'End Date', detail: 'Mar-17-2023' },
    { tag: 'Uploaded ', detail: '' },
  ];
}
