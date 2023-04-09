import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { HelpComponent } from './help/help.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translateX(0%)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translateX(100%)',
        })
      ),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isExpanded: boolean = true;
  @Output() dataEvent = new EventEmitter<any>();
  ngOnInit() {}
  constructor(private dialog: MatDialog, public utility: UtilityService) {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }
  divVisible = 'out';

  toggleDiv() {
    this.divVisible = this.divVisible === 'out' ? 'in' : 'out';
  }
  checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.isExpanded = screenWidth < 1000;
    this.isExpanded = screenWidth > 1000;
  }
  isExpendedValue() {
    this.isExpanded = !this.isExpanded;
    this.dataEvent.emit(this.isExpanded);
  }

  openDialog(): void {
    // const isSmallScreen = window.matchMedia('(max-width: 50em)').matches;
    const dialogRef = this.dialog.open(HelpComponent, {
      // width: isSmallScreen ? '100%' : '30%',
      height: '40%',
      data: {},
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
