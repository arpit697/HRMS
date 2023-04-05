import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-details-trainee',
  templateUrl: './training-details-trainee.component.html',
  styleUrls: ['./training-details-trainee.component.scss'],
})
export class TrainingDetailsTraineeComponent {
  selectedTab = '';
  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      console.log(params);
    });
    this.selectedTab = 'training detail'; // Set the first button active by default
  }
}
