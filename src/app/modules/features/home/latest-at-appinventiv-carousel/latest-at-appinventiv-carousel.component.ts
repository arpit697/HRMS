import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GALLERY } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-latest-at-appinventiv-carousel',
  templateUrl: './latest-at-appinventiv-carousel.component.html',
  styleUrls: ['./latest-at-appinventiv-carousel.component.scss'],
})
export class LatestAtAppinventivCarouselComponent implements OnInit {
  gallery: any;
  ngOnInit(): void {
    this.gallery = GALLERY;
  }
  arr = [1, 2, 3];
  innerHtmlArr = [
    '<div class="celebration">\n\t <p><span>⚫ </span>Appreciation for team</p>\n\t<p>Dear Nowcrowd Team,</p>\n\t<p></p><p>We would like to really appreciate the hard work of each individual and show our gratitude. We really appreciate the efforts and good work. Keep Shining and growing!&nbsp;</p>\n\t<p>&nbsp;All of us are putting our best efforts we are sure, so keep spreading your awesomeness.</p>...<p></p>\n\t<div class="card_in_btm">\n\t</div>\n</div>',
    
    '<div class="announcement">\n\t <p><span>⚫ </span>New Product Launch</p>\n\t<p>Dear Customers,</p>\n\t<p></p><p>We are excited to announce the launch of our latest product - the Nowcrowd Mobile App. This app will enable you to stay up-to-date with all the latest news, events, and promotions from Nowcrowd, right from your smartphone.</p>\n\t<p>&nbsp;Download the app now and start exploring the world of Nowcrowd!</p>...<p></p>\n\t<div class="card_in_btm">\n\t</div>\n</div>',
    
    '<div class="alert">\n\t <p><span>⚫ </span>System Maintenance</p>\n\t<p>Dear Customers,</p>\n\t<p></p><p>Please be advised that we will be conducting maintenance on our systems from 10pm-12am on Friday, April 22. During this time, some services may be temporarily unavailable.</p>\n\t<p>&nbsp;We apologize for any inconvenience this may cause and thank you for your patience and understanding.</p>...<p></p>\n\t<div class="card_in_btm">\n\t</div>\n</div>'
  ];
  

  middleCarousel: OwlOptions = {
    dots: true,
    mouseDrag: false,
    touchDrag: true,
    autoplay: false,
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

  appreciationCarouselConfig: OwlOptions = {
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
}
