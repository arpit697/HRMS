import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYEE_TRAINING_DATA } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-training-details-trainee',
  templateUrl: './training-details-trainee.component.html',
  styleUrls: ['./training-details-trainee.component.scss'],
})
export class TrainingDetailsTraineeComponent {
  selectedTab = '';
  details: any;
  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      let arr = EMPLOYEE_TRAINING_DATA.filter((item) => item.id == params.id);
      this.details = arr[0];
    });
    console.log(this.details);

    this.selectedTab = 'training detail'; // Set the first button active by default
  }
}
