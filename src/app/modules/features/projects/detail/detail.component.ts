import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit{

  splitTiles = <any>[] 
  constructor(public utility:UtilityService){

  }
  ngOnInit(): void {
    this.splitTiles = this.utility.splitArray(this.projectTitles);
  }

  projectTitles = [
    { title: 'Roadmap', documents: [] },
    { title: 'Project Plan', documents: [] },
    { title: 'User Stories', documents: [] },
    { title: 'Designs', documents: [] },
    { title: 'Scope Of Work', documents: [] },
    { title: 'Wireframe', documents: [] },
    { title: 'Other', documents: [] },
    { title: 'Project App Links', documents: [] },
  ];

}
