import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GALLERY, GALLERY_COLLECTION } from 'src/app/constants/app.constants';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  gallery = <any>[];

  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    this.gallery = GALLERY_COLLECTION;
  }
  bottomCarousel: OwlOptions = {
    loop: false,
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
    margin: 10,
  };

  view(collection_data: any) {
    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      width: '50%',
      height: '50%',
      data: { ...collection_data },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
