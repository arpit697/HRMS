import { IRoute } from "../models/route.interface";

export const HOME: IRoute = {
  path: "",
  get fullUrl(): string {
    return `/`;
  },
};
export const ACCOUNT: IRoute = {
  path: "account",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const VERIFY_EMAIL: IRoute = {
  path: "verify-email",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const NOTFOUND: IRoute = {
  path: "invalid",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const PREFERENCCES: IRoute = {
  path: "preferences",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const SEARCH: IRoute = {
  path: "search",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const DISCOVER: IRoute = {
  path: "discover",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const URGENT_HELP: IRoute = {
  path: "urgent-help",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const SECTOR_INFO: IRoute = {
  path: "sectors",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const QUICK_ACTIVITIES: IRoute = {
  path: "quick-activities",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const DASHBOARD: IRoute = {
  path: "dashboard",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const LIKED_RESOURCES: IRoute = {
  path: "liked-resources",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const SAVED_RESOURCES: IRoute = {
  path: "saved-resources",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const COMPLETED_RESOURCES: IRoute = {
  path: "completed-resources",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const INPROGRESS_RESOURCES: IRoute = {
  path: "inprogress-resources",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const RESET_PASSWORD: IRoute = {
  path: "reset-password",
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};

export const FEATURED_RESOURCES: IRoute = {
  path: "featured-resources",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const MAIN_CONTENT: IRoute = {
  path: "resources",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const COURSE_INTRODUCTION: IRoute = {
  path: "course-introduction",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const HOW_IT_WORKS: IRoute = {
  path: "how-it-works",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
