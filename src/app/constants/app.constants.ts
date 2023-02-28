export const SIDE_NAV_ITEM = [
  { icon: 'home', name: 'home', router_link: 'HOME' },
  {
    icon: 'person',
    name: 'My Profile',
    router_link: 'PROFILE',
    important: true,
  },
  {
    icon: 'local_library',
    name: 'Directory',
    router_link: 'DIRECTORY',
    important: true,
  },
  {
    icon: 'person_search',
    name: 'Entrepreneurship program',
    important: true,
    categories: [
      {
        icon: 'travel_explore',
        name: 'Explore',
        router_link: 'ENTREPRENEURSHIP',
      },
    ],
  },
  {
    icon: 'view_in_ar',
    name: 'My Links',
    categories: [
      { icon: 'shield', name: 'Insurance Verification Details' },
      {
        icon: 'holiday_village',
        name: 'Holiday Calenders 2023',
        router_link: 'HOLIDAY_CALENDER',
      },
      {
        icon: 'gavel',
        name: 'Policy Document',
        router_link: 'POLICY_DOCUMENTS',
      },
    ],
  },
  {
    icon: 'payments',
    name: 'Finance',
    categories: [
      {
        icon: 'horizontal_rule',
        name: 'Salary Slip',
        blank: true,
        router_link: 'https://hrms.easysourceindia.com/Payroll/',
      },
      {
        icon: 'horizontal_rule',
        name: 'Form 16',
        blank: true,
        router_link: 'https://hrms.easysourceindia.com/Payroll/',
      },
      {
        icon: 'horizontal_rule',
        name: 'Investment Declaration',
        blank: true,
        router_link: 'https://hrms.easysourceindia.com/Payroll/',
      },
    ],
  },
  {
    icon: 'preview',
    name: 'Reviews',
    categories: [
      { icon: 'commit', name: 'My Performance', router_link: 'MY_PERFORMANCE' },
    ],
  },
  {
    icon: 'diversity_2',
    name: 'Refer a Friend',
    categories: [
      { icon: 'open_in_new', name: 'Job Opening', router_link: 'JOB_OPENINGS' },
      { icon: 'list', name: 'Referral List', router_link: 'REFERRAL_LIST' },
    ],
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
    name: 'Attendance',
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
  { icon: 'logout', name: 'Logout', router_link: 'ACCOUNT' },
];

export const EMP_DETAIL = {
  full_name: 'arpit dwivedi',
  email: 'arpit.dwivedi@appinventiv.com',
  employee_id: 'AI1558',
  department: 'software engineer',
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

export const JOBS = [
  {
    tech_image: '../../assets/technologies/marketing.svg',
    tech_name: 'Marketing',
    location: 'Noida, Uttar Pradesh',
    release_date: '09/02/2023',
    department: 'Business Development Manager',
    description: 'Looking for Business Development Executive/Manager.',
    opening_count: '2',
    experience: {
      form: '1',
      to: '3',
    },
  },
  {
    tech_image: '../../assets/technologies/react-native.svg',
    tech_name: 'Tech Lead',
    location: 'Noida, Uttar Pradesh',
    release_date: '09/02/2023',
    department: 'Associate Tech Lead',
    description: 'We are looking for React Native developers & Leads.',
    opening_count: '5',
    experience: {
      form: '5',
      to: '9',
    },
  },
  {
    tech_image: '../../assets/technologies/business-analyst.svg',
    tech_name: 'Business Analyst',
    location: 'Noida, Uttar Pradesh',
    release_date: '08/02/2023',
    department: 'Business Analyst ',
    description: 'Looking for Business Analysts to join us immediately.',
    opening_count: '4',
    experience: {
      from: '1',
      to: '3',
    },
  },
  {
    tech_image: '../../assets/technologies/marketing.svg',
    tech_name: 'Marketing',
    location: 'Noida, Uttar Pradesh',
    release_date: '09/02/2023',
    department: 'Business Development Manager',
    description: 'Looking for Business Development Executive/Manager.',
    opening_count: '2',
    experience: {
      form: '1',
      to: '3',
    },
  },
  {
    tech_image: '../../assets/technologies/react-native.svg',
    tech_name: 'Tech Lead',
    location: 'Noida, Uttar Pradesh',
    release_date: '09/02/2023',
    department: 'Associate Tech Lead',
    description: 'We are looking for React Native developers & Leads.',
    opening_count: '5',
    experience: {
      form: '5',
      to: '9',
    },
  },
  {
    tech_image: '../../assets/technologies/business-analyst.svg',
    tech_name: 'Business Analyst',
    location: 'Noida, Uttar Pradesh',
    release_date: '08/02/2023',
    department: 'Business Analyst ',
    description: 'Looking for Business Analysts to join us immediately.',
    opening_count: '4',
    experience: {
      form: '1',
      to: '3',
    },
  },
];

export const GALLERY = [
  '../../assets/gallery/award_165840057373.jpg',
  '../../assets/gallery/award_166719426194.JPG',
  '../../assets/gallery/award_1562311580581.JPG',
  '../../assets/gallery/award_1562312036940.jpg',
  '../../assets/gallery/award_1562312173528.JPG',
  '../../assets/gallery/award_1562321673412.jpg',
  '../../assets/gallery/award_1565349878201.jpg',
  '../../assets/gallery/award_1578298873782.JPG',
  '../../assets/gallery/award_1580297046325.jpg',
  '../../assets/gallery/award_1649302782547.JPG',
  '../../assets/gallery/award_1649320793321.jpg',
  '../../assets/gallery/award_1649407376974.JPG',
  '../../assets/gallery/award_1656582283345.JPG',
  '../../assets/gallery/award_1658644699135.JPG',
  '../../assets/gallery/award_1659338710776.jpg',
  '../../assets/gallery/award_1660310382113.jpg',
  '../../assets/gallery/award_1665553979253.jpg',
  '../../assets/gallery/award_1669014343495.png',
  '../../assets/gallery/award_1672292016846.jpg',
  '../../assets/gallery/award_1672378171227.jpg',
  '../../assets/gallery/award_1674822333816.jpg',
];

export const NEW_FAMILY_MEMBERS = [
  '../../assets/employees/profile_1584437739.jpg',
  '../../assets/employees/profile_1674213230.jpeg',
];

export const EMPLOYEE_DATA = [
  {
    name: 'Aahan Verm',
    department: 'Android',
    email: 'aahan.verma@appinventiv.com',
    birthday: '21st Aug ',
  },
  {
    name: 'Aakash Bisht',
    department: 'FINANCE',
    email: 'aakash.bisht@appinventiv.com',
    birthday: '21st Aug ',
  },
  {
    name: 'Aakriti Singh',
    department: 'Government Team Marketing',
    email: 'Aakriti.singh@appinventiv.com',
    birthday: '21st Aug ',
  },
  {
    name: 'Aanchal Srivastava',
    department: 'Business Analyst',
    email: 'anchal.srivastava@appinventiv.com',
    birthday: '21st Aug ',
  },
  {
    name: 'Aarti Verma',
    department: 'Node.Js',
    email: 'aarti.verma@appinventiv.com',
    birthday: '21st Aug ',
  },
  {
    name: 'Aarushi Sharma',
    department: 'Business Analyst',
    email: 'aarushi.sharma@appinventiv.com',
    birthday: '21st Aug ',
  },
];

export const DEPARTMENTS = [
  'All',
  '.NET',
  'Admin',
  'Android',
  'Angular',
  'Blockchain',
  'Business Analyst',
  'Designing',
  'DevOps',
  'FINANE',
  'Flutter',
  'Government Team Marketing',
  'House Keeping',
  'HR',
];

export const GENDERS = ['male', 'female', 'third gender'];

export const MARITAL_STATUS = [
  'single',
  'married',
  'widowed',
  'divorced',
  'registered partnership',
];

export const EMP_RATING = [
  { rating_type: 'Technical Skills', score: '3.4' },
  { rating_type: 'Ownership of Delivery', score: '3.7' },
  { rating_type: 'Teamwork', score: '3.9' },
  { rating_type: 'Process Adherence', score: '3.7' },
];

export const ENTREPRENEURSHIP_DATA = {
  objective: {
    title: 'Objective :',
    paragraph:
      'Share your innovative startup ideas with us, get funding from us and grow on your own. We want to give the young and brilliant ideas some shape and nurture them to the fullest to become potential competitors in the market. Validate your idea, learn and grow from here.',
  },
  investor: {
    title: 'Story about our Angel Investor (AI) Saurabh Singh',
    list: [
      'Followed by @NarendraModi Prime Minister of India | @BarackObama Ex-President US | @PiyushGoyal Railway Minister India on Twitter',
      "Listed on INDIA's Top 25 Most Inspiring Startup Stories of 2013 by YourStory",
      'The Companies he has led have created over 4,000 jobs during his leadership tenure.',
      'In Past, He has built successful companies from startup (Bootstrapped) to multi-million dollar in revenue.',
    ],
    paragraph:
      'Founded passion driven niche startups where he served many Top Fortune companies & leading brands in making their Mobile Strategy successful as a CEO & Founder of 250+ people company AppStudioz "India\'s leading mobile app development company" ​(★Acquired in 2014). He also Co-founded TechAhead in 2009 & was founding partner at C&B Electronics.',
  },
  experience: [
    {
      title: 'Professional Experience',
      list: [
        '16+ years of professional experience of which 11+ years are as Founding Partner of lean startups across diverse domains with an entrepreneurial drive. Always looking to innovate by bringing smart people together.',
        'Passionate for building and scaling businesses',
        'Strong experience in working in ambiguity to solve complex problems. Skilled at designing and executing successful innovative strategies.',
        'Extensive experience in developing many successful products for the entire spectrum of users, from conceptualising the business ideas to preparing product feature road map, from consumer facing front-end to business facing back-end, designing & wire framing with unmatched track record of Success & Performance.',
      ],
    },
  ],
};

export const CAROUSEL_DATA = {
  celebration: [
    {
      content:
        'Appreciation for teams, Dear ABP News Team, We would like to really appreciate the hard work of each individual and show our gratitude. We really appreciate the efforts and good work. Keep Shining and growing! All of us are putting our best efforts we are sure, so keep spreading your awesomeness.',
    },
  ],
};
