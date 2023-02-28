import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ENTREPRENEURSHIP_DATA } from 'src/app/constants/app.constants';


@Component({
  selector: 'app-entreprenurship',
  templateUrl: './entreprenurship.component.html',
  styleUrls: ['./entreprenurship.component.scss'],
})
export class EntreprenurshipComponent implements OnInit {
  entrepreneurs_data:
    | {
        objective: { title: string; paragraph: string };
        investor: { title: string; list: string[]; paragraph: string };
        experience: { title: string; list: string[] }[];
      }
    | any;

  // constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.entrepreneurs_data = ENTREPRENEURSHIP_DATA;
  }

  // openShareYourIdeaDialog(): void {
  //   const dialogRef = this.dialog.open(ShareYourIdeaComponent, {});
  //   dialogRef.afterClosed().subscribe((result: any) => {});
  // }
}
