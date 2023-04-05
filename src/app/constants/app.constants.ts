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
    categories: [
      {
        icon: 'fullscreen',
        name: 'My Interview',
        router_link: 'INTERVIEWS',
      },
    ],
  },

  {
    icon: 'model_training',
    name: 'Freshers Training',
    categories: [
      {
        icon: 'moving',
        name: 'My Training',
        router_link: 'FRESHERS_TRAININGS',
      },
    ],
  },
  {
    icon: 'straighten',
    name: 'Training',
    categories: [
      {
        icon: 'upcoming',
        name: 'Upcoming Training',
        router_link: 'UPCOMING_TRAININGS',
      },
      {
        icon: 'arrow_upward',
        name: 'Ongoing Trainings',
        router_link: 'ONGOING_TRAININGS',
      },
      { icon: 'moving', name: 'My Trainings', router_link: 'MY_TRAININGS' },
      {
        icon: 'pending_actions',
        name: 'Requested Trainings',
        router_link: 'REQUESTED_TRAININGS',
      },
    ],
  },
  {
    icon: 'science',
    name: 'Assets inventory',
    categories: [
      {
        icon: 'devices',
        name: 'My Assets Inventory',
        router_link: 'MY_ASSETS_INVENTORY',
      },
      { icon: 'send', name: 'Request Asset', router_link: 'REQUEST_ASSET' },
      {
        icon: 'info',
        name: 'Asset Declaration',
        router_link: 'ASSET_DECLARATION',
      },
    ],
  },
  {
    icon: 'schedule',
    name: 'Attendance',
    categories: [
      {
        icon: 'fiber_manual_record',
        name: 'Attendance Calendar',
        router_link: 'ATTENDANCE_CALENDAR',
      },
      {
        icon: 'precision_manufacturing',
        name: 'Manual Punch',
        router_link: 'MANUAL_PUNCH',
      },
      { icon: 'punch_clock', name: 'Punch log', router_link: 'PUNCH_LOG' },
    ],
  },
  {
    icon: 'energy_savings_leaf',
    name: 'Leave',
    categories: [
      { icon: 'villa', name: 'My Leave', router_link: 'MY_LEAVES' },
      {
        icon: 'houseboat',
        name: 'Floating Leave',
        router_link: 'FLOATING_LEAVES',
      },
    ],
  },
  {
    icon: 'confirmation_number',
    name: 'Tickets',
    categories: [
      { icon: 'book_online', name: 'Tickets', router_link: 'MY_TICKETS' },
    ],
  },
  {
    icon: 'local_activity',
    name: 'DSR',
    categories: [
      { icon: 'edit_calendar', name: 'My DSR', router_link: 'MY_DSR' },
    ],
  },

  { icon: 'view_agenda', name: 'Projects', router_link: 'PROJECTS' },
  { icon: 'currency_exchange', name: 'Expense', active: false },
  { icon: 'campaign', name: 'Announcements', active: false },
  { icon: 'flight_takeoff', name: 'Travels', active: false },
  { icon: 'logout', name: 'Logout', router_link: 'ACCOUNT' },
];

export const EMP_DETAIL = {
  full_name: 'arpit dwivedi',
  email: 'arpit.dwivedi@appinventiv.com',
  employee_id: 'AI1558',
  designation: 'software engineer',
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
    id: 2567,
    tech_image: '../../assets/technologies/marketing.svg',
    tech_name: 'Marketing',
    location: 'Noida, Uttar Pradesh',
    release_date: '09/02/2023',
    department: 'Business Development Manager',
    description: 'Looking for Business Development Executive/Manager.',
    opening_count: '2',
    job_type: 'Permanent',
    technical_skills: ['Business Development', 'Sales', 'Product Sales'],
    job_introduction: 'Looking for Business Development Executive/Manager.',
    job_description: {
      description:
        'We are looking for an ambitious and energetic Business Development Executive/Specialist to help us expand our clientele. You will have the liberty to create and apply effective sales strategies to increase the branding and revenue of the company. The goal is to drive sustainable financial growth by boosting sales and creating strong bonds with clients.',
      responsibilities: [
        'Researching new ideas/campaigns and creating multiple sources of revenue/brand building',
        'Helping the team with lead generation & building a rapport with industry experts',
        'Regular client follow-ups and keeping track of monthly sales targets',
        'Bringing in new clients and retaining the existing ones for repeated business',
        'Calls with CXOs to brief our services and close deals',
        'Being the middleman between a client and our in-house anchor during Online Interviews of top leaders from the industry',
        'Account Management - keeping track of timelines & deliverables of both B2B and B2C clients and following up with the concerned teams internally',
      ],
    },
    job_qualification: [
      'Relevant work experience in the field of B2B/B2C sales & business development (1-3 years)',
      'Excellent communication skills (verbal & written) as the candidate will be connected with C-level management, especially from US & European markets',
      'Good hand at drafting professional emails & sales pitches for new outreach campaigns to collaborate with new & existing clients',
      'Good hand at drafting professional emails & sales pitches for new outreach campaigns to collaborate with new & existing clients',
      'Good hand at using Google Sheets/Excel',
      'Ability to identify the quality of lead and deal/negotiate with the client accordingly',
      'Ability to identify & prioritize tasks as per their urgency & importance',
    ],
    experience: {
      from: '1',
      to: '3',
    },
  },
  {
    id: 2569,
    tech_image: '../../assets/technologies/react-native.svg',
    tech_name: 'Tech Lead',
    location: 'Noida, Uttar Pradesh',
    release_date: '09/02/2023',
    department: 'Associate Tech Lead',
    description: 'We are looking for React Native developers & Leads.',
    opening_count: '5',
    job_type: 'Permanent',
    technical_skills: ['React Native', 'JavaScript', 'Mobile App Development'],
    job_introduction: 'We are looking for React Native developers & Leads.',
    job_description: {
      description:
        'We are seeking a talented and experienced React Native developer to join our dynamic team. The successful candidate will be responsible for leading a team of developers and working closely with project managers to deliver high-quality mobile applications for our clients. You will be working on cutting-edge technologies and collaborating with a team of designers, developers, and quality analysts to deliver world-class mobile applications.',
      responsibilities: [
        'Lead a team of developers to design, develop, and maintain high-quality React Native mobile applications',
        'Collaborate with project managers, designers, and other stakeholders to deliver projects on time and within budget',
        'Create and maintain technical documentation for the project',
        'Contribute to the development of best practices, methodologies, and tools to improve the efficiency and quality of our work',
        'Mentor and train junior developers',
      ],
    },
    job_qualification: [
      '5-9 years of experience in mobile app development, with at least 3 years of experience in React Native',
      'Strong understanding of JavaScript, React Native, and related frameworks',
      'Experience with software development methodologies such as Agile and Scrum',
      'Experience with version control systems such as Git',
      'Experience working with RESTful APIs',
      'Good problem-solving and debugging skills',
      'Excellent communication and interpersonal skills',
    ],
    experience: {
      from: '5',
      to: '9',
    },
  },
  {
    id: 2669,
    tech_image: '../../assets/technologies/business-analyst.svg',
    tech_name: 'Business Analyst',
    location: 'Noida, Uttar Pradesh',
    release_date: '08/02/2023',
    department: 'Business Analyst',
    description: 'Looking for Business Analysts to join us immediately.',
    opening_count: '4',
    job_type: 'Permanent',
    technical_skills: [
      'Business Analysis',
      'Requirements Gathering',
      'Data Analysis',
    ],
    job_introduction: 'Looking for Business Analysts to join us immediately.',
    job_description: {
      description:
        'We are seeking a highly motivated and experienced Business Analyst to join our team. The successful candidate will be responsible for gathering and analyzing business requirements, creating functional specifications, and ensuring that the final product meets the needs of our clients. You will work closely with cross-functional teams to identify business opportunities and provide solutions to complex problems.',
      responsibilities: [
        'Gather and document business requirements and translate them into functional specifications',
        'Conduct gap analysis to identify areas for process improvement and make recommendations',
        'Create and maintain project documentation, including project plans, status reports, and user manuals',
        'Collaborate with cross-functional teams to identify business opportunities and provide solutions to complex problems',
        'Perform data analysis and provide insights to support business decisions',
        'Conduct user acceptance testing and ensure that the final product meets the needs of the client',
        'Train end-users on new applications and processes',
      ],
    },
    job_qualification: [
      '1-3 years of experience in business analysis or a related field',
      'Bachelor’s degree in business administration, computer science, or a related field',
      'Strong analytical and problem-solving skills',
      'Experience with requirements gathering and documentation',
      'Experience with process improvement and reengineering',
      'Excellent communication and interpersonal skills',
      'Experience with data analysis and reporting tools',
      'Experience with Agile/Scrum methodology is a plus',
    ],
    experience: {
      from: '1',
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

export const GALLERY_COLLECTION = [
  {
    collection_name: 'lorem',
    collection: [
      '../../assets/gallery/award_165840057373.jpg',
      '../../assets/gallery/award_166719426194.JPG',
      '../../assets/gallery/award_1562311580581.JPG',
    ],
  },
  {
    collection_name: 'lorem 4',
    collection: [
      '../../assets/gallery/award_1658644699135.JPG',
      '../../assets/gallery/award_1659338710776.jpg',
      '../../assets/gallery/award_1660310382113.jpg',
      '../../assets/gallery/award_1665553979253.jpg',
      '../../assets/gallery/award_1669014343495.png',
      '../../assets/gallery/award_1672292016846.jpg',
      '../../assets/gallery/award_1672378171227.jpg',
      '../../assets/gallery/award_1674822333816.jpg',
    ],
  },
  {
    collection_name: 'lorem 3',
    collection: [
      '../../assets/gallery/award_1578298873782.JPG',
      '../../assets/gallery/award_1580297046325.jpg',
      '../../assets/gallery/award_1649302782547.JPG',
      '../../assets/gallery/award_1649320793321.jpg',
      '../../assets/gallery/award_1649407376974.JPG',
      '../../assets/gallery/award_1656582283345.JPG',
    ],
  },
  {
    collection_name: 'lorem 2',
    collection: [
      '../../assets/gallery/award_1562312036940.jpg',
      '../../assets/gallery/award_1562312173528.JPG',
      '../../assets/gallery/award_1565349878201.jpg',
    ],
  },
];

export const NEW_FAMILY_MEMBERS = [
  {
    name: 'Nandani',
    path: '../../assets/employees/profile_1584437739.jpg',
    role: 'Social Media Marketing : Social Media Team',
  },
  {
    name: 'Ananya',
    path: '../../assets/employees/profile_1674213230.jpeg',
    role: 'Developer : Angular',
  },
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

export const EMP_RATING = [
  { rating_type: 'Technical Skills', score: '3.4' },
  { rating_type: 'Ownership of Delivery', score: '3.7' },
  { rating_type: 'Teamwork', score: '3.9' },
  { rating_type: 'Process Adherence', score: '3.7' },
];

export const EMP_RATING_MONTH = [
  {
    year: '2022',
    months: [
      {
        month: 'January',
        rating: 4,
        honor: 0,
        reward: 0,
      },
      {
        month: 'February',
        rating: 2,
        honor: 0,
        reward: 0,
      },
      {
        month: 'March',
        rating: 5,
        honor: 0,
        reward: 0,
      },
      {
        month: 'April',
        rating: 1,
        honor: 0,
        reward: 0,
      },
      {
        month: 'May',
        rating: 5,
        honor: 0,
        reward: 0,
      },
      {
        month: 'June',
        rating: 3,
        honor: 0,
        reward: 0,
      },
      {
        month: 'July',
        rating: 5,
        honor: 0,
        reward: 0,
      },
      {
        month: 'August',
        rating: 4,
        honor: 0,
        reward: 0,
      },
      {
        month: 'September',
        rating: 2,
        honor: 0,
        reward: 0,
      },
      {
        month: 'October',
        rating: 3,
        honor: 0,
        reward: 0,
      },
      {
        month: 'November',
        rating: 5,
        honor: 0,
        reward: 0,
      },
      {
        month: 'December',
        rating: 1,
        honor: 0,
        reward: 0,
      },
    ],
  },
  {
    year: '2023',
    months: [
      {
        month: 'January',
        rating: 5,
        honor: 0,
        reward: 0,
      },
      {
        month: 'February',
        rating: 2,
        honor: 0,
        reward: 0,
      },
      {
        month: 'March',
        rating: 4,
        honor: 0,
        reward: 0,
      },
      {
        month: 'April',
        rating: 5,
        honor: 0,
        reward: 0,
      },
      {
        month: 'May',
        rating: 3,
        honor: 0,
        reward: 0,
      },
      {
        month: 'June',
        rating: 5,
        honor: 0,
        reward: 0,
      },
      {
        month: 'July',
        rating: 1,
        honor: 0,
        reward: 0,
      },
      {
        month: 'August',
        rating: 4,
        honor: 0,
        reward: 0,
      },
      {
        month: 'September',
        rating: 3,
        honor: 0,
        reward: 0,
      },
      {
        month: 'October',
        rating: 2,
        honor: 0,
        reward: 0,
      },
      {
        month: 'November',
        rating: 5,
        honor: 0,
        reward: 0,
      },
      {
        month: 'December',
        rating: 4,
        honor: 0,
        reward: 0,
      },
    ],
  },
];

export const EMPLOYEE_TRAINING_DATA = [
  {
    id: 2070,
    default_img: '../../assets/default/ic-training.svg',
    name: 'Angular Training Feb-2022',
    department: 'angular',
    status: 'Complete',
    start_date: 'Feb-28-2022',
    end_date: 'Arp-02-2022',
    mode: 'Online',
    descrition: 'Angular Training Feb- 2022 - Uploaded from sheet',
    training_detail: [
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
    ],
    sub_topics: [
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
    ],
    attendance: [
      {
        serial_number: 1,
        topic: 'Introduction to Programming',
        date: '2022-03-01',
        attendance: 'Present',
      },
      {
        serial_number: 2,
        topic: 'Data Structures and Algorithms',
        date: '2022-03-05',
        attendance: 'Absent',
      },
      {
        serial_number: 3,
        topic: 'Object-Oriented Programming',
        date: '2022-03-08',
        attendance: 'Present',
      },
      {
        serial_number: 4,
        topic: 'Database Management Systems',
        date: '2022-03-12',
        attendance: 'Present',
      },
      {
        serial_number: 5,
        topic: 'Web Development',
        date: '2022-03-15',
        attendance: 'Absent',
      },
    ],
  },
  {
    id: 2071,
    default_img: '../../assets/default/ic-training.svg',
    name: 'HTML/CSS/UI',
    department: 'angular',
    status: 'Complete',
    start_date: 'Feb-14-2022',
    end_date: 'Feb-25-2022',
    mode: 'offline',
  },
];

export const UPCOMING_TRAINING_DATA = [
  {
    id: 2077,
    default_img: '../../assets/default/ic-training.svg',
    name: 'Micro Frontend Angular',
    department: 'angular',
    status: 'Complete',
    start_date: 'Jan-05-2023',
    end_date: 'Arp-02-2022',
    seat: '41',
  },
];
