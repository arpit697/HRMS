import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwlOptions , CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss'],
})
export class GalleryDialogComponent implements OnInit {
  @ViewChild('OwlCarousel') carousel!: CarouselComponent;
  gallery: any;
  constructor(
    public dialogRef: MatDialogRef<GalleryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.gallery = this.data;
  }

  carousel_config: OwlOptions = {
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    smartSpeed: 750,
    autoplayTimeout: 5000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
  };

  next() {
    this.carousel.next();
  }

  previous() {
    this.carousel.prev();
  }
}
