import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {


  displayMsg:string;

  @Input() message:string;

  constructor() { }

  ngOnInit(): void {
    this.displayMsg = this.message && this.message.length ? this.message : `No data found`;
  }

}
