import { Component, OnInit } from '@angular/core';
import { EMPLOYEE_TRAINING_DATA } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.scss'],
})
export class MyTrainingComponent implements OnInit {
  employee_training_data: any;

  ngOnInit(): void {
    this.employee_training_data = EMPLOYEE_TRAINING_DATA;
  }
}
