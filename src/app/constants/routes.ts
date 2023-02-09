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
