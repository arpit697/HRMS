import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { HelpComponent } from './help/help.component';
import { MatDialog } from '@angular/material/dialog';
import { sliderAnimation } from 'src/app/animations/slide.in.out';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    sliderAnimation
  ],
})
export class HeaderComponent implements OnInit {
  @Input() isExpanded: boolean = true;
  @Output() dataEvent = new EventEmitter<any>();
  @Input() routeChange = false;
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
    const dialogRef = this.dialog.open(HelpComponent, {
      height: '40%',
      data: {},
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
