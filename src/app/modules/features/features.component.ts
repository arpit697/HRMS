// Import necessary dependencies and components
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

// Import animations and constants

import {
  rotateAnimation,
  rotationStates,
} from 'src/app/animations/clock.anticlock';
import { SIDE_NAV_ITEM } from 'src/app/constants/app.constants';
import { CovidComponent } from './includes/utilities/popups/covid/covid.component';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { ACCOUNT } from 'src/app/constants/routes';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  // Define animations
  animations: [rotateAnimation, rotationStates],
})
export class FeaturesComponent implements OnInit {
  // Define component variables
  rotateDirection = 'clockwise';
  sidenavState = 'open';
  isExpanded = true;
  isShowing = false;
  items = <any>[...SIDE_NAV_ITEM];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: SocialAuthService
  ) {
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
    this.authService.authState.subscribe(() => {
      if (sessionStorage.getItem('login') == 'false') {
        this.router.navigate([ACCOUNT.fullUrl]);
      }
    });
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
  accordianClickHandler(url: any) {
    if (url === 'ACCOUNT') {
      this.authService.signOut();
      sessionStorage.setItem('login', JSON.stringify('false'));
      this.router.navigate([ACCOUNT.fullUrl]);
    }
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
      disableClose: false,
      autoFocus: false,
      restoreFocus: false,
      panelClass: [''],
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
    });
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
