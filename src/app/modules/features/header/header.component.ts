import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isExpanded: boolean = true;
  @Output() dataEvent = new EventEmitter<any>();
  ngOnInit() {}
  constructor(public utility: UtilityService) {
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
  isExpendedValue() {
    this.isExpanded = !this.isExpanded;
    this.dataEvent.emit(this.isExpanded);
  }
}
