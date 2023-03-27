import { Component, OnInit } from '@angular/core';
import { EMP_DETAIL } from 'src/app/constants/app.constants';
import { PROFILE_SELECTION_MENU } from 'src/app/constants/app.constants';
import { UtilityService } from 'src/app/services/utility/utility.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  empDetail!: any;
  selectionMenu!: any;

  constructor(public utility: UtilityService) {}
  ngOnInit(): void {
    this.empDetail = EMP_DETAIL;
    console.log(this.empDetail);
    let emp = [
      {label : 'Email' , data : this.empDetail.email},
      {label : 'Employee Id' , data : this.empDetail.employee_id},
      {label : 'Designation' , data : this.empDetail.designation},
      {label : 'Last Login' , data : this.empDetail.last_login},
    ]
    this.empDetail = emp
    this.selectionMenu = PROFILE_SELECTION_MENU;
  }
}
