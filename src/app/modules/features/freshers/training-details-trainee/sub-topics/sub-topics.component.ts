import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent {
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'sub_topics',
      header: 'Sub Topics',
      cell: (element: Record<string, any>) => `${element['sub_topics']}`,
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
      sub_topics: 'Introduction to HTML',
      topic_trainer: 'John Doe',
      trainer_email: 'johndoe@example.com',
      start_date: '2023-05-01',
      end_date: '2023-05-05',
      resource_url: 'https://example.com/html-course',
    },
    {
      serial_number: 2,
      sub_topics: 'Introduction to CSS',
      topic_trainer: 'Jane Smith',
      trainer_email: 'janesmith@example.com',
      start_date: '2023-05-15',
      end_date: '2023-05-19',
      resource_url: 'https://example.com/css-course',
    },
    {
      serial_number: 3,
      sub_topics: 'JavaScript Basics',
      topic_trainer: 'Bob Johnson',
      trainer_email: 'bobjohnson@example.com',
      start_date: '2023-06-01',
      end_date: '2023-06-05',
      resource_url: 'https://example.com/javascript-course',
    },
    {
      serial_number: 4,
      sub_topics: 'Advanced CSS Techniques',
      topic_trainer: 'Sara Lee',
      trainer_email: 'saralee@example.com',
      start_date: '2023-06-15',
      end_date: '2023-06-19',
      resource_url: 'https://example.com/css-course-advanced',
    },
    {
      serial_number: 5,
      sub_topics: 'React.js Fundamentals',
      topic_trainer: 'Mike Adams',
      trainer_email: 'mikeadams@example.com',
      start_date: '2023-07-01',
      end_date: '2023-07-05',
      resource_url: 'https://example.com/reactjs-course',
    },
  ];
  
}
