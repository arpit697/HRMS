import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NEW_FAMILY_MEMBERS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-new-members',
  templateUrl: './new-members.component.html',
  styleUrls: ['./new-members.component.scss'],
})
export class NewMembersComponent implements OnInit {
  newEmployee: any;
  ngOnInit(): void {
    this.newEmployee = NEW_FAMILY_MEMBERS;
  }
  topCarouselRight: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      '0': {
        items: 1,
      },
      '600': {
        items: 2,
      },
    },
    margin: 20,
  };
}
