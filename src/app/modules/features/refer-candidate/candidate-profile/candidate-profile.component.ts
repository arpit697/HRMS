import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss'],
})
export class CandidateProfileComponent implements OnInit {
  candidateProfile: any;
  constructor(private _route: ActivatedRoute, private _data: DataService) {}
  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.candidateProfile = this._data.referredCandidate.filter(
        (item: any) => item.id == params.id
      );
      console.log(this.candidateProfile , params);
    });
  }
}
