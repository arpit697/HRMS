export const SIDE_NAV_ITEM = [
  { icon: 'home', name: 'home', router_link: 'HOME' },
  { icon: 'person', name: 'My Profile', router_link: 'PROFILE' , important : true},
  { icon: 'local_library', name: 'Directory', router_link: 'DIRECTORY',  important : true},
  {
    icon: 'person_search',
    name: 'Entrepreneurship program',
    important : true,
    categories: [
      {
        icon: 'travel_explore',
        name: 'Explore',
        router_link: 'ENTREPRENURSHIP',
      },
    ],
  },
  {
    icon: 'view_in_ar',
    name: 'My Links',
    categories: [
      { name: 'Insurance Verification Details' },
      { name: 'Holiday Calenderv 2023' },
      { name: 'Policy Document' },
    ],
  },
  {
    icon: 'payments',
    name: 'Finance',
    categories: [
      { name: 'Salary Slip' },
      { name: 'Form 16' },
      { name: 'Investment Declaration' },
    ],
  },
  {
    icon: 'preview',
    name: 'Reviews',
    categories: [{ name: 'My Performance' }],
  },
  {
    icon: 'diversity_2',
    name: 'Refer a Friend',
    categories: [{ name: 'Job Opening' }, { name: 'Referral List' }],
  },
  {
    icon: 'work',
    name: 'Recruitment',
    categories: [{ name: 'My Interview' }],
  },

  {
    icon: 'model_training',
    name: 'Freshers Training',
    categories: [{ name: 'My Training' }],
  },
  {
    icon: 'straighten',
    name: 'Training',
    categories: [
      { name: 'Upcoming Training' },
      { name: 'Ongoing Trainings' },
      { name: 'My Trainings' },
      { name: 'Requested Trainings' },
    ],
  },
  {
    icon: 'science',
    name: 'Assets inventory',
    categories: [
      { name: 'My Assets Inventory' },
      { name: 'Request Asset' },
      { name: 'Asset Declaration' },
    ],
  },
  {
    icon: 'schedule',
    name: 'Attendence',
    categories: [
      { name: 'Attendance Calendar' },
      { name: 'Manual Punch' },
      { name: 'Punch log' },
    ],
  },
  {
    icon: 'energy_savings_leaf',
    name: 'Leave',
    categories: [{ name: 'My Leave' }, { name: 'Floating Leave' }],
  },
  {
    icon: 'confirmation_number',
    name: 'Tickets',
    categories: [{ name: 'Tickets' }],
  },
  {
    icon: 'local_activity',
    name: 'DSR',
    categories: [{ name: 'My DSR' }],
  },

  { icon: 'view_agenda', name: 'Projects' },
  { icon: 'currency_exchange', name: 'Expense', active: false },
  { icon: 'campaign', name: 'Announcements', active: false },
  { icon: 'flight_takeoff', name: 'Travels', active: false },
  { icon: 'logout', name: 'Logout' },
];

export const EMP_DETAIL = {
  full_name: 'arpit dwivedi',
  email: 'arpit.dwivedi@appinventiv.com',
  employee_id: 'AI1558',
  designation: 'software engineeer',
  last_login: 'Feb-05-2023 06:34 PM from 172.31.25.47',
};

export const PROFILE_SELECTION_MENU = [
  { icon: 'person', name: 'basic information' },
  { icon: 'photo_camera', name: 'profile picture' },
  { icon: 'library_books', name: 'qualification' },
  { icon: 'update', name: 'shift' },
  { icon: 'key', name: 'change password' },
  { icon: 'thumb_up', name: 'appraisal' },
];
