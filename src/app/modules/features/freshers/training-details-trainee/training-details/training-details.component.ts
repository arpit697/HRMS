import { Component } from '@angular/core';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss'],
})
export class TrainingDetailsComponent {
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

  tableData = [
    {
      serial_number: 1,
      topic: 'Introduction to JavaScript',
      topic_trainer: 'John Doe',
      trainer_email: 'johndoe@example.com',
      start_date: '2023-05-01',
      end_date: '2023-05-05',
      resource_url: 'https://example.com/javascript-course',
    },
    {
      serial_number: 2,
      topic: 'Responsive Web Design',
      topic_trainer: 'Jane Smith',
      trainer_email: 'janesmith@example.com',
      start_date: '2023-05-15',
      end_date: '2023-05-19',
      resource_url: 'https://example.com/web-design-course',
    },
    {
      serial_number: 3,
      topic: 'Node.js Fundamentals',
      topic_trainer: 'Bob Johnson',
      trainer_email: 'bobjohnson@example.com',
      start_date: '2023-06-01',
      end_date: '2023-06-05',
      resource_url: 'https://example.com/nodejs-course',
    },
    {
      serial_number: 4,
      topic: 'Advanced CSS Techniques',
      topic_trainer: 'Sara Lee',
      trainer_email: 'saralee@example.com',
      start_date: '2023-06-15',
      end_date: '2023-06-19',
      resource_url: 'https://example.com/css-course',
    },
    {
      serial_number: 5,
      topic: 'React.js for Beginners',
      topic_trainer: 'Mike Adams',
      trainer_email: 'mikeadams@example.com',
      start_date: '2023-07-01',
      end_date: '2023-07-05',
      resource_url: 'https://example.com/reactjs-course',
    },
  ];
}
