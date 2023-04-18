// Import necessary dependencies and components
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { Router, NavigationEnd } from '@angular/router';

// Import animations and constants
import {
  trigger,
  transition,
  animate,
  state,
  style,
} from '@angular/animations';
import {
  rotateAnimation,
  rotationStates,
} from 'src/app/animations/clock.anticlock';
import { SIDE_NAV_ITEM } from 'src/app/constants/app.constants';
import { CovidComponent } from './covid/covid.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  // Define animations
  animations: [rotateAnimation, rotationStates , ],
})
export class FeaturesComponent implements OnInit {
  // Define component variables
  rotateDirection = 'clockwise';
  sidenavState = 'open';
  isExpanded = true;
  isShowing = false;
  items = <any>[...SIDE_NAV_ITEM];

  constructor(private dialog: MatDialog, private router: Router) {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  ngOnInit(): void {
    // Set up interval to rotate animation direction every second
    setInterval(() => {
      this.rotateDirection =
        this.rotateDirection === 'clockwise' ? 'anticlockwise' : 'clockwise';
    }, 1000);
  }

  ngAfterViewInit(): void {
    // Call checkScreenSize() on router event to update expanded state
    this.router.events.subscribe((event: any) => {
      if (event) {
        this.checkScreenSize();
      }
    });
  }

  checkScreenSize() {
    // Check screen width and set expanded state accordingly
    const screenWidth = window.innerWidth;
    this.isExpanded = screenWidth > 1000;
  }

  handleIsExpandedChange(event: any) {
    // Update expanded state on side nav toggle
    this.isExpanded = event;
  }

  mouseenter() {
    // Show side nav on hover if it is collapsed
    this.isShowing = !this.isExpanded;
  }

  mouseleave() {
    // Hide side nav on hover exit
    this.isShowing = false;
  }

  openDialog(): void {
    // Open dialog for COVID component
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
