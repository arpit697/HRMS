import { Component, OnInit } from '@angular/core';
import { EMP_DETAIL } from 'src/app/constants/app.constants';
import { PROFILE_SELECTION_MENU } from 'src/app/constants/app.constants';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  empDetail!: any;
  selectionMenu!: any;
  ngOnInit(): void {
    this.empDetail = EMP_DETAIL;
    this.selectionMenu = PROFILE_SELECTION_MENU
  }

  hello(event :any) {
    console.log(event);
    
  }
}
