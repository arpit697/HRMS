export const SHIFT_TABLE_COLUMN = [
  {
    columnDef: 'joining',
    header: 'Date Of Joining',
    cell: (element: Record<string, any>) => `${element['joining']}`,
  },
  {
    columnDef: 'shift',
    header: 'Office Shift',
    cell: (element: Record<string, any>) => `${element['shift']}`,
  },
];
export const SHIFT_TABLE_DATA = [
  {
    joining: '27-Feb-2022',
    shift: 'Morning Shift',
  },
];

export const QUALIFICATION_TABLE_COLUMN = [
  {
    columnDef: 'action',
    header: 'Action',
    cell: (element: Record<string, any>) => `${element['action']}`,
  },
  {
    columnDef: 'school_university',
    header: 'School/University',
    cell: (element: Record<string, any>) => `${element['school_university']}`,
  },
  {
    columnDef: 'time_period',
    header: 'Time Period',
    cell: (element: Record<string, any>) => `${element['time_period']}`,
  },
];
