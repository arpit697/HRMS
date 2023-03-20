import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  GALLERY,
  JOBS,
  NEW_FAMILY_MEMBERS,
} from 'src/app/constants/app.constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  openings!: any;
  gallery = <any>[];
  newEmployee = <any>[];

  arr = [1, 2, 3];
  ngOnInit(): void {
    this.openings = JOBS;
    this.gallery = GALLERY;
    this.newEmployee = NEW_FAMILY_MEMBERS;
  }

  bonuses = [
    { money: '2K', expReq: 'For 3 to 5 Years of experience' },
    { money: '5K', expReq: 'For 5 to 9 Years of experience' },
    { money: '10K', expReq: 'For 9+ Years of experience' },
  ];
}
