import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
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

  getFirstLetter(text: any) {
    return text.charAt(0);
  }
}
