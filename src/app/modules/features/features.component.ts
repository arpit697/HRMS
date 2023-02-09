import { Component, OnInit } from '@angular/core';
import { SIDE_NAV_ITEM } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
hello() {
console.log('hello');

}
  public items = <any>[]
  constructor() {}
  ngOnInit(): void {
   this.items = SIDE_NAV_ITEM
  }
  isExpanded: boolean = false;
}
