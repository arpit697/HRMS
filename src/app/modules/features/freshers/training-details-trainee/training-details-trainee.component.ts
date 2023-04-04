import { Component } from '@angular/core';

@Component({
  selector: 'app-training-details-trainee',
  templateUrl: './training-details-trainee.component.html',
  styleUrls: ['./training-details-trainee.component.scss'],
})
export class TrainingDetailsTraineeComponent {
  selectedTab = '';
  ngOnInit(): void {
    this.selectedTab = 'training detail'; // Set the first button active by default
  }
}
