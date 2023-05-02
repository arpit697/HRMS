import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GALLERY, INNER_HTML } from 'src/app/constants/app.constants';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-latest-at-appinventiv-carousel',
  templateUrl: './latest-at-appinventiv-carousel.component.html',
  styleUrls: ['./latest-at-appinventiv-carousel.component.scss'],
})
export class LatestAtAppinventivCarouselComponent implements OnInit {
  gallery: any;
  innerHtmlArr = [...INNER_HTML];
  isViewInitialized = false;
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    this.gallery = GALLERY;
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
  }
  arr = [1, 2, 3];

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

  openModalDialog(index: any): void {
    let isSmallScreen = window.matchMedia('(max-width: 50em)').matches;
    let dialogRef = this.dialog.open(ModalDialogComponent, {
      width: isSmallScreen ? '100%' : '40%',
     
      data: { id: index },
    });
    dialogRef.disableClose = false;
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
