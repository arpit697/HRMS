import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-attendance-calendar',
  templateUrl: './attendance-calendar.component.html',
  styleUrls: ['./attendance-calendar.component.scss'],
})
export class AttendanceCalendarComponent {
  WEEKEND_EVENT_COLOR = '#FFA07A'; // Salmon color
  OUTSIDE_MONTH_BACKGROUND_COLOR = '#F5F5F5'; // Light gray color

  events: any = [
    // Leave events
    {
      title: 'Annual leave',
      start: '2023-04-05',
      end: '2023-04-07',
      color: '#1E90FF', // DodgerBlue color
    },
    {
      title: 'Sick leave',
      start: '2023-04-09',
      end: '2023-04-10',
      color: '#FF6347', // Tomato color
    },
    {
      title: 'Vacation',
      start: '2023-04-19',
      end: '2023-04-20',
      color: '#008080', // Teal color
    },

    {
      title: 'Appreciation',
      start: '2023-04-20',
      end: '2023-04-20',
      color: '#008050', // Teal color
    },

    // Weekend events
    {
      title: 'Weekend',
      start: '2023-04-01',
      end: '2023-04-03',
      rendering: 'background',
      color: this.WEEKEND_EVENT_COLOR,
    },
    {
      title: 'Weekend',
      start: '2023-04-08',
      end: '2023-04-10',
      rendering: 'background',
      color: this.WEEKEND_EVENT_COLOR,
    },
    {
      title: 'Weekend',
      start: '2023-04-15',
      end: '2023-04-17',
      rendering: 'background',
      color: this.WEEKEND_EVENT_COLOR,
    },
    {
      title: 'Weekend',
      start: '2023-04-22',
      end: '2023-04-24',
      rendering: 'background',
      color: this.WEEKEND_EVENT_COLOR,
    },
    {
      title: 'Weekend',
      start: '2023-04-29',
      end: '2023-04-30',
      rendering: 'background',
      color: this.WEEKEND_EVENT_COLOR,
    },
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    // eventClick: (info) => {
    //   console.log('Clicked on event: ' + info.event.title);
    // },
    // eventDrop: (info:any) => {
    //   console.log('Dropped event: ' + info.event.title);
    // },
    // eventResize: (info) => {
    //   console.log('Resized event: ' + info.event.title);
    // },
    // select: (info) => {
    //   console.log('Selected: ' + info.startStr + ' to ' + info.endStr);
    // },
    // dayRender: (info) => {
    //   if (info.date.getDay() === 0 || info.date.getDay() === 6) {
    //     info.el.classList.add('weekend');
    //   }
    // },
    slotDuration: '00:15:00',
    slotLabelInterval: '01:00',
    slotLabelFormat: {
      hour: 'numeric',
      minute: '2-digit',
      omitZeroMinute: false,
      meridiem: 'short',
    },
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short',
    },
    dayHeaderFormat: {
      weekday: 'short',
      month: 'numeric',
      day: 'numeric',
      omitCommas: true,
    },

    weekends: true,
    nowIndicator: true,
    eventDisplay: 'block',
    eventTextColor: '#ffffff',
    eventColor: '#378006',
    firstDay: 1,
    height: 'auto',
    aspectRatio: 2,
    contentHeight: 'auto',
    handleWindowResize: true,
    windowResizeDelay: 100,
    timeZone: 'UTC',
    slotEventOverlap: true,
  };
}
