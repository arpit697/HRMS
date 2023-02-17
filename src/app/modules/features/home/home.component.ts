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
  ngOnInit(): void {
    this.openings = JOBS;
    this.gallery = GALLERY;
    this.newEmployee = NEW_FAMILY_MEMBERS;
    console.log(this.newEmployee);
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

  bottomCarousel: OwlOptions = {
    loop: true,
    responsive: {
      '0': {
        items: 1,
      },
      '600': {
        items: 2,
      },
      '1500': {
        items: 3,
      },
    },
  };
  ngAfterViewInit() {
    window.dispatchEvent(new Event('resize'));
  }
}

// items: The number of items to be displayed on a single page.

// loop: Enables looping of the carousel, so that the first and last items are connected.

// autoplay: Enables automatic rotation of the carousel.

// autoplayTimeout: The time in milliseconds between automatic rotations.

// autoplayHoverPause: Pause autoplay when hovering over the carousel.

// nav: Enables navigation arrows to move forward and backward in the carousel.

// dots: Enables navigation dots at the bottom of the carousel.

// autoWidth: Sets the width of the items to auto.

// center: Enables centering of the active item.

// lazyLoad: Enables lazy loading of images.

// responsive: Allows configuration of the carousel based on the screen size.

// mouseDrag: Enables dragging of the carousel using the mouse.

// touchDrag: Enables dragging of the carousel using touch.

// pullDrag: Enables dragging of the carousel using the mouse or touch.

// freeDrag: Enables free dragging of the carousel.

// merge: Merges items to create a seamless effect.

// mergeFit: Ensures that items are merged to fit within the container.

// stagePadding: Adds padding to the sides of the carousel.
