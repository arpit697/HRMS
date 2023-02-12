import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { rotateAnimation } from 'src/app/animations/clock.anticlock';
import { SIDE_NAV_ITEM } from 'src/app/constants/app.constants';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  animations: [rotateAnimation],
})
export class FeaturesComponent implements OnInit {
  rotateDirection = 'clockwise';

  public items = <any>[];
  constructor() {}
  ngOnInit(): void {
    this.items = SIDE_NAV_ITEM;
    setInterval(() => {
      this.rotateDirection =
        this.rotateDirection === 'clockwise' ? 'anticlockwise' : 'clockwise';
    }, 1000);
  }
  isExpanded: boolean = false;
}
