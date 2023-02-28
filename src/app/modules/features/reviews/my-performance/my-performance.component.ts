import { Component, OnInit } from '@angular/core';
import { slideRightToLeft } from 'src/app/animations/slide.right.to.left';
import { EMP_DETAIL, EMP_RATING } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss'],
  animations: [slideRightToLeft],
})
export class MyPerformanceComponent implements OnInit {
  employee_rating!: { rating_type: string; score: string }[];
  employee_details!: {
    full_name: string;
    email: string;
    employee_id: string;
    department: string;
    last_login: string;
  };
  ngOnInit(): void {
    this.employee_details = EMP_DETAIL;
    this.employee_rating = EMP_RATING;
  }
}
