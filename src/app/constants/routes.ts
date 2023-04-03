import { RouteInterface } from '../interfaces/route.interface';
export const ACCOUNT: RouteInterface = {
  path: 'account',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const LOGIN: RouteInterface = {
  path: 'login',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const FORGOT_PASSWORD: RouteInterface = {
  path: 'forgot-password',
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};

export const FEATURES: RouteInterface = {
  path: 'features',
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const HOME: RouteInterface = {
  path: 'home',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const PROFILE: RouteInterface = {
  path: 'profile',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const DIRECTORY: RouteInterface = {
  path: 'directory',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const ENTREPRENEURSHIP: RouteInterface = {
  path: 'entrepreneurship',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const STARTUP: RouteInterface = {
  path: 'startup',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const ADD_PITCH: RouteInterface = {
  path: 'add-pitch',
  get fullUrl(): string {
    return `${STARTUP.fullUrl}/${this.path}`;
  },
};

export const MY_LINKS: RouteInterface = {
  path: 'my-links',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const POLICY_DOCUMENTS: RouteInterface = {
  path: 'policy-documents',
  get fullUrl(): string {
    return `${MY_LINKS.fullUrl}/${this.path}`;
  },
};

export const HOLIDAY_CALENDER: RouteInterface = {
  path: 'holiday_calender',
  get fullUrl(): string {
    return `${MY_LINKS.fullUrl}/${this.path}`;
  },
};

export const FINANCE: RouteInterface = {
  path: 'finance',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const REVIEWS: RouteInterface = {
  path: 'reviews',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const MY_PERFORMANCE: RouteInterface = {
  path: 'my_performance',
  get fullUrl(): string {
    return `${REVIEWS.fullUrl}/${this.path}`;
  },
};

export const REFER_CANDIDATE: RouteInterface = {
  path: 'refer-candidate',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const JOB_OPENINGS: RouteInterface = {
  path: 'job-openings',
  get fullUrl(): string {
    return `${REFER_CANDIDATE.fullUrl}/${this.path}`;
  },
};

export const JOB_DETAILS: RouteInterface = {
  path: 'job-details',
  get fullUrl(): string {
    return `${REFER_CANDIDATE.fullUrl}/${this.path}`;
  },
};

export const CANDIDATE_PROFILE: RouteInterface = {
  path: 'candidate-profile',
  get fullUrl(): string {
    return `${REFER_CANDIDATE.fullUrl}/${this.path}`;
  },
};

export const REFERRAL_LIST: RouteInterface = {
  path: 'referral-list',
  get fullUrl(): string {
    return `${REFER_CANDIDATE.fullUrl}/${this.path}`;
  },
};

export const RECRUITMENT: RouteInterface = {
  path: 'recruitment',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const INTERVIEWS: RouteInterface = {
  path: 'interviews',
  get fullUrl(): string {
    return `${RECRUITMENT.fullUrl}/${this.path}`;
  },
};

export const FRESHERS: RouteInterface = {
  path: 'freshers',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const FRESHERS_TRAININGS: RouteInterface = {
  path: 'my-trainings',
  get fullUrl(): string {
    return `${FRESHERS.fullUrl}/${this.path}`;
  },
};
export const TRAINING: RouteInterface = {
  path: 'training',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const UPCOMING_TRAININGS: RouteInterface = {
  path: 'upcoming-trainings',
  get fullUrl(): string {
    return `${TRAINING.fullUrl}/${this.path}`;
  },
};
export const ONGOING_TRAININGS: RouteInterface = {
  path: 'ongoing-trainings',
  get fullUrl(): string {
    return `${TRAINING.fullUrl}/${this.path}`;
  },
};
export const MY_TRAININGS: RouteInterface = {
  path: 'my-trainings',
  get fullUrl(): string {
    return `${TRAINING.fullUrl}/${this.path}`;
  },
};
export const REQUESTED_TRAININGS: RouteInterface = {
  path: 'requested-trainings',
  get fullUrl(): string {
    return `${TRAINING.fullUrl}/${this.path}`;
  },
};

export const ASSETS_INVENTORY: RouteInterface = {
  path: 'assets-inventory',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const ASSET_DECLARATION: RouteInterface = {
  path: 'assets-declaration',
  get fullUrl(): string {
    return `${ASSETS_INVENTORY.fullUrl}/${this.path}`;
  },
};

export const REQUEST_ASSET: RouteInterface = {
  path: 'request-asset',
  get fullUrl(): string {
    return `${ASSETS_INVENTORY.fullUrl}/${this.path}`;
  },
};

export const MY_ASSETS_INVENTORY: RouteInterface = {
  path: 'my-assets-inventory',
  get fullUrl(): string {
    return `${ASSETS_INVENTORY.fullUrl}/${this.path}`;
  },
};

export const LEAVE: RouteInterface = {
  path: 'leave',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const MY_LEAVES: RouteInterface = {
  path: 'my-leaves',
  get fullUrl(): string {
    return `${LEAVE.fullUrl}/${this.path}`;
  },
};

export const FLOATING_LEAVES: RouteInterface = {
  path: 'floating-leaves',
  get fullUrl(): string {
    return `${LEAVE.fullUrl}/${this.path}`;
  },
};

export const TICKETS: RouteInterface = {
  path: 'tickets',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const MY_TICKETS: RouteInterface = {
  path: 'my-tickets',
  get fullUrl(): string {
    return `${TICKETS.fullUrl}/${this.path}`;
  },
};

export const DSR: RouteInterface = {
  path: 'dsr',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const MY_DSR: RouteInterface = {
  path: 'my-dsr',
  get fullUrl(): string {
    return `${DSR.fullUrl}/${this.path}`;
  },
};

export const ATTENDANCE: RouteInterface = {
  path: 'attendance',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const ATTENDANCE_CALENDAR: RouteInterface = {
  path: 'attendance-calendar',
  get fullUrl(): string {
    return `${ATTENDANCE.fullUrl}/${this.path}`;
  },
};

export const PUNCH_LOG: RouteInterface = {
  path: 'punch-log',
  get fullUrl(): string {
    return `${ATTENDANCE.fullUrl}/${this.path}`;
  },
};

export const MANUAL_PUNCH: RouteInterface = {
  path: 'manual-punch',
  get fullUrl(): string {
    return `${ATTENDANCE.fullUrl}/${this.path}`;
  },
};

export const PROJECTS: RouteInterface = {
  path: 'projects',
  get fullUrl(): string {
    return `${FEATURES.fullUrl}/${this.path}`;
  },
};

export const PROJECT_DETAIL: RouteInterface = {
  path: 'detail',
  get fullUrl(): string {
    return `${PROJECTS.fullUrl}/${this.path}`;
  },
};
