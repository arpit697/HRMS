import { Component, OnInit } from '@angular/core';
import { JOBS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-latest-job-openings',
  templateUrl: './latest-job-openings.component.html',
  styleUrls: ['./latest-job-openings.component.scss'],
})
export class LatestJobOpeningsComponent implements OnInit {
  openings: any;
  ngOnInit(): void {
    this.openings = JOBS;
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
}
