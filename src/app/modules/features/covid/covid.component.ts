import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReferCandidateDialogComponent } from '../refer-candidate/job-openings/refer-candidate-dialog/refer-candidate-dialog.component';
import { COVID_INSTRUCTIONS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements OnInit {
  covidInstruction: any;
  constructor(
    public dialogRef: MatDialogRef<CovidComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.covidInstruction = COVID_INSTRUCTIONS;
  }

  topCarouselLeft = {
    loop: true,
    lazyLoad: true,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    responsive: {
      '0': {
        items: 1,
      },
      '600': {
        items: 1,
      },
      '1000': {
        items: 1,
      },
    },
  };

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
  }
}
