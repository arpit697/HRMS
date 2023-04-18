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
    type: 'two-buttons-action',
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
  {
    columnDef: 'education_level',
    header: 'Education Level',
    cell: (element: Record<string, any>) => `${element['education_level']}`,
  },
];

export const POLICY_DOCUMENTS_TABLE_COLUMN = [
  {
    columnDef: 'serial_number',
    header: '#',
    cell: (element: Record<string, any>) => `${element['serial_number']}`,
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: Record<string, any>) => `${element['name']}`,
    icon: true,
    type: 'icon-data',
  },
  {
    columnDef: 'type',
    header: 'Type',
    cell: (element: Record<string, any>) => `${element['type']}`,
  },
  {
    columnDef: 'file_size',
    header: 'File Size',
    cell: (element: Record<string, any>) => `${element['file_size']}`,
  },
  {
    columnDef: 'last_modified',
    header: 'Last Modified',
    cell: (element: Record<string, any>) => `${element['last_modified']}`,
  },
  {
    columnDef: 'action',
    header: 'Action',
    cell: (element: any) => `${element['action']}`,
    type: 'button-action',
  },
];

export const POLICY_DOCUMENTS_TABLE_DATA = [
  {
    serial_number: 1,
    name: 'Appinventiv Policy Manual',
    type: 'PDF',
    icon: 'picture_as_pdf',
    button_icon: 'download',
    file_size: '2.3 MB',
    last_modified: '2022-12-01',
    action: 'Download',
    file_url: 'assets/policyDoc/Appinventiv_Policy_Manual.pdf',
  },
  {
    serial_number: 2,
    name: 'Contact List Updated Appinventiv',
    type: 'PDF',
    icon: 'picture_as_pdf',
    button_icon: 'download',
    file_size: '5.1 MB',
    last_modified: '2022-11-15',
    action: 'Download',
    file_url: 'assets/policyDoc/Contact_List_Updated_Appinventiv.pdf',
  },
  {
    serial_number: 3,
    name: 'Employee Referral Policy',
    type: 'PDF',
    icon: 'picture_as_pdf',
    button_icon: 'download',
    file_size: '1.7 MB',
    last_modified: '2022-11-27',
    action: 'Download',
    file_url: 'assets/policyDoc/Employee Referral Policy.pdf',
  },
  {
    serial_number: 4,
    name: 'Holiday Calendar 2023',
    type: 'JPG',
    icon: 'image',
    button_icon: 'download',
    file_size: '10.2 MB',
    last_modified: '2022-10-10',
    action: 'Download',
    file_url: 'assets/policyDoc/Holiday-Calendar-2023.jpg',
  },
  {
    serial_number: 5,
    name: 'Leave Policy',
    type: 'PDF',
    icon: 'picture_as_pdf',
    button_icon: 'download',
    file_size: '0.8 MB',
    last_modified: '2022-12-12',
    action: 'Download',
    file_url: 'assets/policyDoc/LeavePolicy.pdf',
  },
  {
    serial_number: 6,
    name: 'Sexual Harassment',
    type: 'PDF',
    icon: 'picture_as_pdf',
    button_icon: 'download',
    file_size: '0.8 MB',
    last_modified: '2022-12-12',
    action: 'Download',
    file_url: 'assets/policyDoc/SexualHarassment.pdf',
  },
];

export const MY_ASSETS_TABLE_COLUMN = [
  {
    columnDef: 'asset_name',
    header: 'Asset Name',
    cell: (element: Record<string, any>) => `${element['asset_name']}`,
  },
  {
    columnDef: 'asset_category',
    header: 'Asset Category',
    cell: (element: Record<string, any>) => `${element['asset_category']}`,
  },
  {
    columnDef: 'computer_asset_code',
    header: 'Computer Asset Code',
    cell: (element: Record<string, any>) => `${element['computer_asset_code']}`,
  },
  {
    columnDef: 'brand',
    header: 'Brand',
    cell: (element: Record<string, any>) => `${element['brand']}`,
  },
  {
    columnDef: 'serial_number',
    header: 'Serial Number',
    cell: (element: Record<string, any>) => `${element['serial_number']}`,
  },
  {
    columnDef: 'model',
    header: 'Model',
    cell: (element: Record<string, any>) => `${element['model']}`,
  },
  {
    columnDef: 'is_working',
    header: 'Is Working ?',
    cell: (element: Record<string, any>) => `${element['is_working']}`,
  },
  {
    columnDef: 'company',
    header: 'Company',
    cell: (element: Record<string, any>) => `${element['company']}`,
  },
];

export const MY_ASSETS_TABLE_DATA = [
  {
    asset_name: 'Laptop',
    asset_category: 'Computers',
    computer_asset_code: 'C001',
    brand: 'Dell',
    serial_number: '123456789',
    model: 'Latitude',
    is_working: true,
    company: 'ABC Inc.',
  },
];

export const REQUEST_ASSET_TABLE_COLUMN = [
  {
    columnDef: 'serial_number',
    header: 'S.No',
    cell: (element: Record<string, any>) => `${element['serial_number']}`,
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: Record<string, any>) => `${element['status']}`,
  },
  {
    columnDef: 'request_Reason',
    header: 'Request Reason',
    cell: (element: Record<string, any>) => `${element['request_reason']}`,
  },
  {
    columnDef: 'priority',
    header: 'Priority',
    cell: (element: Record<string, any>) => `${element['priority']}`,
  },
  {
    columnDef: 'request_at',
    header: 'Request At',
    cell: (element: Record<string, any>) => `${element['request_at']}`,
  },
  {
    columnDef: 'asset_category',
    header: 'Asset Category',
    cell: (element: Record<string, any>) => `${element['asset_category']}`,
  },
  {
    columnDef: 'allocation_type',
    header: 'Allocation Type',
    cell: (element: Record<string, any>) => `${element['allocation_type']}`,
  },
  {
    columnDef: 'company',
    header: 'Company',
    cell: (element: Record<string, any>) => `${element['company']}`,
  },
];

export const REQUEST_ASSET_TABLE_DATA = [
  {
    serial_number: 1,
    status: 'Pending',
    request_reason: 'New hire',
    priority: 'High',
    request_at: '2022-03-25',
    asset_category: 'Laptops',
    allocation_type: 'Permanent',
    company: 'ABC Corporation',
  },
];

export const ASSET_DECLARATION_TABLE_COLUMN = [
  {
    columnDef: 'serial_number',
    header: 'S.No',
    cell: (element: Record<string, any>) => `${element['serial_number']}`,
  },
  {
    columnDef: 'employee_id',
    header: 'Asset Category',
    cell: (element: Record<string, any>) => `${element['employee_id']}`,
  },
  {
    columnDef: 'unique_asset_code',
    header: 'Computer Asset Code',
    cell: (element: Record<string, any>) => `${element['unique_asset_code']}`,
  },
  {
    columnDef: 'asset_serial_number',
    header: 'Serial Number',
    cell: (element: Record<string, any>) => `${element['asset_serial_number']}`,
  },
  {
    columnDef: 'os',
    header: 'OS',
    cell: (element: Record<string, any>) => `${element['os']}`,
  },
  {
    columnDef: 'os_version',
    header: 'OS Version',
    cell: (element: Record<string, any>) => `${element['os_version']}`,
  },
  {
    columnDef: 'brand',
    header: 'brand',
    cell: (element: Record<string, any>) => `${element['brand']}`,
  },
  {
    columnDef: 'color',
    header: 'Color',
    cell: (element: Record<string, any>) => `${element['color']}`,
  },
  {
    columnDef: 'images',
    header: 'Images',
    cell: (element: Record<string, any>) => `${element['images']}`,
  },
  {
    columnDef: 'is_working',
    header: 'Is Working ?',
    cell: (element: Record<string, any>) => `${element['is_working']}`,
  },
  {
    columnDef: 'added',
    header: 'Added',
    cell: (element: Record<string, any>) => `${element['added']}`,
  },
];

export const ASSET_DECLARATION_TABLE_DATA = [
  {
    serial_number: 1,
    employee_id: 'Computer',
    unique_asset_code: 'COMP-001',
    asset_serial_number: 'ASSET-001',
    os: 'Windows',
    os_version: '10',
    brand: 'Dell',
    color: 'Black',
    images: 'http://example.com/image1.jpg',
    is_working: true,
    added: '2022-02-01',
  },
  {
    serial_number: 2,
    employee_id: 'Computer',
    unique_asset_code: 'COMP-002',
    asset_serial_number: 'ASSET-002',
    os: 'Windows',
    os_version: '10',
    brand: 'HP',
    color: 'Silver',
    images: 'http://example.com/image2.jpg',
    is_working: false,
    added: '2022-02-03',
  },
  {
    serial_number: 3,
    employee_id: 'Monitor',
    unique_asset_code: 'MON-001',
    asset_serial_number: 'ASSET-003',
    os: 'Ubuntu',
    os_version: '2020.2',
    brand: 'Samsung',
    color: 'Black',
    images: 'http://example.com/image3.jpg',
    is_working: true,
    added: '2022-02-05',
  },
];

export const MANUAL_PUNCH_TABLE_COLUMN = [
  {
    columnDef: 'edit',
    header: 'Edit',
    cell: (element: Record<string, any>) => `${element['edit']}`,
  },
  {
    columnDef: 'manual_punch_date',
    header: 'Manual Punch Date',
    cell: (element: Record<string, any>) => `${element['manual_punch_date']}`,
  },
  {
    columnDef: 'in_time',
    header: 'In Time',
    cell: (element: Record<string, any>) => `${element['in_time']}`,
  },
  {
    columnDef: 'out_time',
    header: 'Out Time',
    cell: (element: Record<string, any>) => `${element['out_time']}`,
  },
];

export const MANUAL_PUNCH_TABLE_DATA = [];

export const PUNCH_LOG_TABLE_COULMN = [
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: Record<string, any>) => `${element['name']}`,
  },
  {
    columnDef: 'punch_time',
    header: 'Punch Time',
    cell: (element: Record<string, any>) => `${element['punch_time']}`,
  },
  {
    columnDef: 'direction',
    header: 'Direction',
    cell: (element: Record<string, any>) => `${element['direction']}`,
  },
];

export const PUNCH_LOG_TABLE_DATA = [];

export const LEAVE_TABLE_COLUMN = [
  {
    columnDef: 'action',
    header: 'Action',
    cell: (element: Record<string, any>) => `${element['action']}`,
    type: 'two-buttons-action',
  },
  {
    columnDef: 'leave_type',
    header: 'Leave Type',
    cell: (element: Record<string, any>) => `${element['leave_type']}`,
  },
  {
    columnDef: 'request_from',
    header: 'Request From',
    cell: (element: Record<string, any>) => `${element['request_from']}`,
  },
  {
    columnDef: 'request_to',
    header: 'Request To',
    cell: (element: Record<string, any>) => `${element['request_to']}`,
  },
  {
    columnDef: 'applied_on',
    header: 'Applied On',
    cell: (element: Record<string, any>) => `${element['applied_on']}`,
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: Record<string, any>) => `${element['status']}`,
  },
  {
    columnDef: 'level_one',
    header: 'Level One',
    cell: (element: Record<string, any>) => `${element['level_one']}`,
  },
  {
    columnDef: 'level_two',
    header: 'Level Two',
    cell: (element: Record<string, any>) => `${element['level_two']}`,
  },
];

export const LEAVE_TABLE_DATA = [
  {
    first_button_icon: 'arrow_circle_right',
    second_button_icon: 'refresh',
    leave_type: 'Annual',
    request_from: 'John Doe',
    request_to: 'Manager',
    applied_on: '2022-01-01',
    status: 'Pending',
    level_one: 'Jane Smith',
    level_two: 'David Lee',
  },
  // {
  //   action: 'Edit',
  //   leave_type: 'Sick',
  //   request_form: 'Sarah Johnson',
  //   request_to: 'Supervisor',
  //   applied_on: '2022-02-15',
  //   status: 'Approved',
  //   level_one: 'Mark Davis',
  //   level_two: 'Nancy Brown',
  // },
  // {
  //   action: 'Delete',
  //   leave_type: 'Maternity',
  //   request_form: 'Emily Wilson',
  //   request_to: 'HR Manager',
  //   applied_on: '2022-03-10',
  //   status: 'Rejected',
  //   level_one: 'Alex Rodriguez',
  //   level_two: 'Samuel Kim',
  // },
  // {
  //   action: 'View',
  //   leave_type: 'Bereavement',
  //   request_form: 'Chris Evans',
  //   request_to: 'Team Lead',
  //   applied_on: '2022-04-05',
  //   status: 'Pending',
  //   level_one: 'Olivia Parker',
  //   level_two: 'Ryan Lee',
  // },
  // {
  //   action: 'Edit',
  //   leave_type: 'Personal',
  //   request_form: 'Daniel Brown',
  //   request_to: 'Manager',
  //   applied_on: '2022-05-20',
  //   status: 'Approved',
  //   level_one: 'Jessica Kim',
  //   level_two: 'Erica Davis',
  // },
];

export const DSR_TABLE_COLUMN = [
  {
    columnDef: 'serial_number',
    header: 'Sr.No.',
    cell: (element: Record<string, any>) => `${element['serial_number']}`,
  },
  {
    columnDef: 'emp_name',
    header: 'Employee Name',
    cell: (element: Record<string, any>) => `${element['emp_name']}`,
  },
  {
    columnDef: 'emp_id',
    header: 'Employee Id',
    cell: (element: Record<string, any>) => `${element['emp_id']}`,
  },
  {
    columnDef: 'email',
    header: 'email',
    cell: (element: Record<string, any>) => `${element['email']}`,
  },
  {
    columnDef: 'employment_type',
    header: 'Employment Type',
    cell: (element: Record<string, any>) => `${element['employment_type']}`,
  },
  {
    columnDef: 'date',
    header: 'Date',
    cell: (element: Record<string, any>) => `${element['date']}`,
  },
  {
    columnDef: 'total_logged_hr',
    header: 'Total(logged) Hr',
    cell: (element: Record<string, any>) => `${element['total_logged_hr']}`,
  },
  {
    columnDef: 'final_approval',
    header: 'Final Approval',
    cell: (element: Record<string, any>) => `${element['final_approval']}`,
    type: 'button-action',
  },
];

export const DSR_TABLE_DATA = [
  {
    serial_number: 1,
    project_name: 'Training Project React JS',
    emp_name: 'John Smith',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'A123',
    email: 'john.smith@example.com',
    employment_type: 'Full-time',
    date: '2022-03-15',
    total_logged_hr: 8,
    final_approval: 'Approved',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
  {
    serial_number: 2,
    project_name: 'Training Project React JS',
    emp_name: 'Jane Doe',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'B456',
    email: 'jane.doe@example.com',
    employment_type: 'Part-time',
    date: '2022-03-15',
    total_logged_hr: 4,
    final_approval: 'Approved',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
  {
    serial_number: 3,
    project_name: 'Training Project React JS',
    emp_name: 'Bob Johnson',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'C789',
    email: 'bob.johnson@example.com',
    employment_type: 'Full-time',
    date: '2022-03-16',
    total_logged_hr: 6,
    final_approval: 'Pending',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
  {
    serial_number: 4,
    project_name: 'Training Project React JS',
    emp_name: 'John Smith',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'A123',
    email: 'john.smith@example.com',
    employment_type: 'Full-time',
    date: '2022-03-15',
    total_logged_hr: 8,
    final_approval: 'Approved',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
  {
    serial_number: 5,
    project_name: 'Training Project React JS',
    emp_name: 'Jane Doe',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'B456',
    email: 'jane.doe@example.com',
    employment_type: 'Part-time',
    date: '2022-03-15',
    total_logged_hr: 4,
    final_approval: 'Approved',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
  {
    serial_number: 6,
    project_name: 'Training Project React JS',
    emp_name: 'Bob Johnson',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'C789',
    email: 'bob.johnson@example.com',
    employment_type: 'Full-time',
    date: '2022-03-16',
    total_logged_hr: 6,
    final_approval: 'Rejected',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
  {
    serial_number: 7,
    project_name: 'Training Project React JS',
    emp_name: 'John Smith',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'A123',
    email: 'john.smith@example.com',
    employment_type: 'Full-time',
    date: '2022-03-15',
    total_logged_hr: 8,
    final_approval: 'Approved',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
  {
    serial_number: 8,
    project_name: 'Training Project React JS',
    emp_name: 'Jane Doe',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'B456',
    email: 'jane.doe@example.com',
    employment_type: 'Part-time',
    date: '2022-03-15',
    total_logged_hr: 4,
    final_approval: 'Approved',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
  {
    serial_number: 9,
    project_name: 'Training Project React JS',
    emp_name: 'Bob Johnson',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'C789',
    email: 'bob.johnson@example.com',
    employment_type: 'Full-time',
    date: '2022-03-16',
    total_logged_hr: 6,
    final_approval: 'Pending',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
  {
    serial_number: 10,
    project_name: 'Training Project React JS',
    emp_name: 'John Smith',
    editor_text: `<p><strong>Meetings:</strong></p>
    <p>N/A</p>
    <p><strong>Tasks:</strong></p>
    <ul>
        <li>Task 1: Optimize the edit and delete of qualification (2 hours) [Complete]</li>
        <li>Task 2: Create the logic of request training module and populate data into requested module (2 hours) [Complete]</li>
        <li>Task 3: Make some left part which is not responsive, make it responsive (4 hours) [Complete]</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <p>N/A</p>
    `,
    emp_id: 'A123',
    email: 'john.smith@example.com',
    employment_type: 'Full-time',
    date: '2022-03-15',
    total_logged_hr: 8,
    final_approval: 'Approved',
    pm_approval: 'Pending',
    am_approval: 'Approved',
    rm_approval: 'Approved',
    status: 'Pending',
    button_icon: 'edit',
    action: '',
  },
];

export const DSR_DETAIL_TABLE_COLUMN = [
  {
    columnDef: 'serial_number',
    header: '#',
    cell: (element: Record<string, any>) => `${element['serial_number']}`,
  },
  {
    columnDef: 'project_name',
    header: 'Project Name',
    cell: (element: Record<string, any>) => `${element['project_name']}`,
  },
  {
    columnDef: 'dsr',
    header: 'DSR',
    cell: (element: Record<string, any>) => `${element['dsr']}`,
    type: 'formatted-text',
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: Record<string, any>) => `${element['status']}`,
  },
  {
    columnDef: 'pm_approval',
    header: 'PM Approval',
    cell: (element: Record<string, any>) => `${element['pm_approval']}`,
  },
  {
    columnDef: 'am_approval',
    header: 'AM Approval',
    cell: (element: Record<string, any>) => `${element['am_approval']}`,
  },
  {
    columnDef: 'rm_approval',
    header: 'RM Approval',
    cell: (element: Record<string, any>) => `${element['rm_approval']}`,
  },
  {
    columnDef: 'final_approval',
    header: 'Final Approval',
    cell: (element: Record<string, any>) => `${element['final_approval']}`,
  },
  {
    columnDef: 'ttotal_logged_hr',
    header: 'Logged Hrs',
    cell: (element: Record<string, any>) => `${element['total_logged_hr']}`,
  },
  {
    columnDef: 'action',
    header: 'Action',
    cell: (element: Record<string, any>) => `${element['action']}`,
    type: 'button-action',
  },
];

export const DSR_DETAIL_TABLE_DATA = [];

export const REQUESTED_TRAINING_TABLE_COLUMN = [
  {
    columnDef: 'serial_number',
    header: 'Serial Number',
    cell: (element: Record<string, any>) => `${element['serial_number']}`,
  },
  {
    columnDef: 'training_name',
    header: 'Training Name',
    cell: (element: Record<string, any>) => `${element['training_name']}`,
  },
  {
    columnDef: 'timeline',
    header: 'Timeline To Conduct',
    cell: (element: Record<string, any>) => `${element['timeline']}`,
  },
  {
    columnDef: 'requested_date',
    header: 'Requested Date',
    cell: (element: Record<string, any>) => `${element['requested_date']}`,
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: Record<string, any>) => `${element['status']}`,
  },
  {
    columnDef: 'action',
    header: 'Action',
    cell: (element: Record<string, any>) => `${element['action']}`,
  },
];

export const REQUESTED_TRAINING_TABLE_DATA = <any>[];

export const MY_TICKETS_TABLE_COLUMS = <any>[
  {
    columnDef: 'action',
    header: 'Action',
    cell: (element: Record<string, any>) => `${element['action']}`,
    type: 'two-buttons-action',
  },
  {
    columnDef: 'ticket_code',
    header: 'Ticket Code',
    cell: (element: Record<string, any>) => `${element['ticket_code']}`,
  },
  {
    columnDef: 'priority',
    header: 'Priority',
    cell: (element: Record<string, any>) => `${element['priority']}`,
  },
  {
    columnDef: 'employee',
    header: 'Employee',
    cell: (element: Record<string, any>) => `${element['employee']}`,
  },
  {
    columnDef: 'subject',
    header: 'Subject',
    cell: (element: Record<string, any>) => `${element['subject']}`,
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: Record<string, any>) => `${element['status']}`,
  },
  {
    columnDef: 'date',
    header: 'Date',
    cell: (element: Record<string, any>) => `${element['date']}`,
  },
];

export const MY_TICKETS_TABLE_DATA = <any>[
  {
    first_button_icon: 'arrow_circle_right',
    second_button_icon: 'delete_forever',
    action: '',
    ticket_code: 'ABC123',
    priority: 'High',
    employee: 'John Smith',
    subject: 'Server is down',
    status: 'Open',
    date: '2022-04-15',
  },
];
