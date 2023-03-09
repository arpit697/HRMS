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
export class HomeComponent implements OnInit, AfterViewInit {
  openings!: any;
  gallery = <any>[];
  newEmployee = <any>[];
  item = {
    tech_image: '../../assets/technologies/react-native.svg',
    tech_name: 'Tech Lead',
    location: 'Noida, Uttar Pradesh',
    release_date: '09/02/2023',
    designation: 'Associate Tech Lead',
    description: 'We are looking for React Native developers & Leads.',
    opening_count: '5',
    experience: {
      from: '5',
      to: '9',
    },
  };

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
  topCarouselRight = {
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      '0': {
        items: 1,
      },
      '600': {
        items: 2,
      },
    },
  };
  middleCarousel: OwlOptions = {
    dots: true,
    mouseDrag: false,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      '0': {
        items: 1,
      },
      '600': {
        items: 2,
      },
      '1400': {
        items: 3,
      },
    },
    margin: 5,
  };

  innerCardLeft: OwlOptions = {
    loop: true,
    dots: false,
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

  innerCardsRight: OwlOptions = {
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 750,
    autoplayTimeout: 5000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
  };

  ngAfterViewInit() {
    window.dispatchEvent(new Event('resize'));
  }
}
