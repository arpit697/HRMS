import { Component } from '@angular/core';
import { UPCOMING_TRAINING_DATA } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-upcoming-trainings',
  templateUrl: './upcoming-trainings.component.html',
  styleUrls: ['./upcoming-trainings.component.scss'],
})
export class UpcomingTrainingsComponent {
  upcoming_trainings: any;
  ngOnInit(): void {
    this.upcoming_trainings = UPCOMING_TRAINING_DATA;
  }
}
