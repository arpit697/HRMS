import { AfterViewInit, Component, OnInit } from '@angular/core';
import { slideRightToLeft } from 'src/app/animations/slide.right.to.left';
import {
  EMP_DETAIL,
  EMP_RATING,
  EMP_RATING_MONTH,
} from 'src/app/constants/app.constants';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss'],
  animations: [slideRightToLeft],
})
export class MyPerformanceComponent implements OnInit {
  // Declare variables with explicit types
  employeeRatings: any;
  employeeDetails: any;
  employeeRatingMonths!: {
    year: string;
    months: { month: string; rating: number; honor: number; reward: number }[];
  }[];
  selectedYearValue = '2022'; // Rename 'year' to 'selectedYearValue' for clarity

  ngOnInit(): void {
    // Initialize component properties
    this.employeeDetails = EMP_DETAIL;
    this.employeeRatings = EMP_RATING;
    this.employeeRatingMonths = EMP_RATING_MONTH;
  }

  // Handler for when user selects a year
  selectedYear(selectedYear: any): void {
    this.selectedYearValue = selectedYear;
  }

  // Filter employee ratings by selected year
  get ratingYear(): any {
    let ratings = this.employeeRatingMonths;
    ratings = ratings.filter(
      (rating) => rating.year === this.selectedYearValue
    );

    return ratings;
  }
}
