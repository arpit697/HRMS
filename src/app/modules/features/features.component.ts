import {
  trigger,
  transition,
  animate,
  state,
  style,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { rotateAnimation } from 'src/app/animations/clock.anticlock';
import { SIDE_NAV_ITEM } from 'src/app/constants/app.constants';
import { CovidComponent } from './covid/covid.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  animations: [
    rotateAnimation,
    trigger('slideInOut', [
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      transition('open <=> closed', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class FeaturesComponent implements OnInit {
  rotateDirection = 'clockwise';
  sidenavState = 'open';
  isExpanded: boolean = true;
  public items = <any>[];
  isClicked: any;
  constructor(private dialog: MatDialog) {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.isExpanded = screenWidth < 1000;
    this.isExpanded = screenWidth > 1000;
  }

  ngOnInit(): void {
    this.items = SIDE_NAV_ITEM;
    setInterval(() => {
      this.rotateDirection =
        this.rotateDirection === 'clockwise' ? 'anticlockwise' : 'clockwise';
    }, 1000);
  }

  handleIsExpandedChange(event: any) {
    this.isExpanded = event;
  }

  isShowing = false;

  mouseenter() {
    this.isShowing = !this.isExpanded;
  }

  mouseleave() {
    this.isShowing = false;
  }

  openDialog(): void {
    const isSmallScreen = window.matchMedia('(max-width: 50em)').matches;
    const dialogRef = this.dialog.open(CovidComponent, {
      width: '90%',
      height: '70%',
      data: {},
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
