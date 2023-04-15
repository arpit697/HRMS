import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYEE_TRAINING_DATA } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss'],
})
export class TrainingDetailsComponent {
  details: any;
  tableData = [];
  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.details = EMPLOYEE_TRAINING_DATA.filter(
        (item) => item.id == params.id
      );
    });
    this.tableData = this.details[0].training_detail
  }
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'topic',
      header: 'Topic',
      cell: (element: Record<string, any>) => `${element['topic']}`,
    },
    {
      columnDef: 'topic_trainer',
      header: 'Topic Trainer',
      cell: (element: Record<string, any>) => `${element['topic_trainer']}`,
    },
    {
      columnDef: 'trainer_email',
      header: 'Trainer Email',
      cell: (element: Record<string, any>) => `${element['trainer_email']}`,
    },
    {
      columnDef: 'start_date',
      header: 'Start Date',
      cell: (element: Record<string, any>) => `${element['start_date']}`,
    },
    {
      columnDef: 'end_date',
      header: 'End Date',
      cell: (element: Record<string, any>) => `${element['end_date']}`,
    },
    {
      columnDef: 'resource_url',
      header: 'Resource URL',
      cell: (element: Record<string, any>) => `${element['resource_url']}`,
    },
  ];

  
}
