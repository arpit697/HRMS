import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { JOBS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-latest-job-openings',
  templateUrl: './latest-job-openings.component.html',
  styleUrls: ['./latest-job-openings.component.scss'],
})
export class LatestJobOpeningsComponent implements OnInit {
  openings = [...JOBS];
  isViewInitialized = false;

  ngAfterViewInit() {
    this.isViewInitialized = true;
  }
  ngOnInit(): void {
}
  carouselConfig: OwlOptions = {
    items : 1,
    loop: true,
    lazyLoad: true,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500
  };
}
