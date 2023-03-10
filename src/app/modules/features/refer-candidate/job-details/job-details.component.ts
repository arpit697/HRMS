import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private dialog: MatDialog) {}
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      console.log(params);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TermsAndConditionsComponent, {});
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
