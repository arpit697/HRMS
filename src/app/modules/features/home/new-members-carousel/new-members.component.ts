import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { NEW_FAMILY_MEMBERS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-new-members',
  templateUrl: './new-members.component.html',
  styleUrls: ['./new-members.component.scss'],
})
export class NewMembersComponent implements OnInit {
  newEmployee: any;
  isViewInitialized = false;
  ngOnInit(): void {
    this.newEmployee = NEW_FAMILY_MEMBERS;
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
  }
  @ViewChild('OwlCarousel') carousel!: CarouselComponent;
  topCarouselRight: OwlOptions = {
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
    margin: 20,
    nav: false,
  };
  next() {
    this.carousel.next();
  }

  previous() {
    this.carousel.prev();
  }
}
