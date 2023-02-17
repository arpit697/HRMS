import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isExpanded: boolean = true;
  @Output () dataEvent =  new EventEmitter<any>();
  ngOnInit() {}
  
  isExpendedValue(){
    this.isExpanded = !this.isExpanded
    this.dataEvent.emit(this.isExpanded);
  }
}
