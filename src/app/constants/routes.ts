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

export const REFERRAL_LIST: RouteInterface = {
  path: 'referral-list',
  get fullUrl(): string {
    return `${REFER_CANDIDATE.fullUrl}/${this.path}`;
  },
};
