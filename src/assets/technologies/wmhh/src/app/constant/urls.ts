export const USER = "user";
export const LOGIN_POST = `${USER}/login`;
export const SIGNUP_POST = `${USER}/signup`;
export const FORGOT_PASSWORD_PATCH = `${USER}/forgot-password`;
export const VERIFY_AUTH_TOKEN = (authToken: string) =>
  `${USER}/verify-token?token=${authToken}`;
export const RESET_PASSWORD_PATCH = `${USER}/reset-password`;
export const PROFILE_GET = `${USER}/profile`;

export const DELTE_ACCOUNT = `${USER}/delete-profile`;

export const LOGOUT_PUT = `${USER}/logout`;

export const SEND_OTP_GET = `${USER}/send-otp`;

export const VERIFY_OTP_POST = `${USER}/verify-otp`;

export const EMAIL_VERIFICATION = `${USER}/email-verification`;

export const SERIES_CONTENT_LIST = `${USER}/get-parent-content-list`;

export const DISCOVER_LIST = `${USER}/get-discover-data-list`;

export const SAVE_PREFERENCES_PATHC = `${USER}/update-profile`;

export const SAVE_FILTER_POST = `${USER}/add-user-filterlog`;
export const GET_FILTER = `${USER}/get-user-filterlog`;
export const RESEND_EMAIL_GET = `${USER}/resend-verification-email`;
export const CONTENT_DETAIL = (id: string) =>
  `${USER}/get-child-content-details?slug=${id}`;
export const SERIES_CONTENT = (id: string) =>
  `user/get-child-content-list?parentslug=${id}`;

export const CONTENT_ACTIVITY_POST = `${USER}/add-user-activity`;
export const CONTENT_LIST_GET_BY_ACTIVITY = (action: string) =>
  `${USER}/get-data-by-activity?actions=${action}&page=1&limit=4`;

export const FULL_CONTENT_LIST_GET_BY_ACTIVITY = (action: string) =>
  `${USER}/get-data-by-activity?actions=${action}`;
export const GOALS_GET = `${USER}/get-goals`;
export const SECTORS_GET = `${USER}/get-sectors`;

export const GET_ARTICLE_BY_TAGS = `${USER}/get-related-articles-by-tags`;
export const GET_SECTORS_DETAIL = `${USER}/get-sectors-details`;
export const GET_FEATURED_BY_SECTOR = `${USER}/get-quick-featured-urgentelp-data-list`;
export const GET_PAGE_CONTENT = `${USER}/get-page-content`;
export const GET_RECOMMENDED_COURSES = `${USER}/get-recomended-sources`;
export const LIKE_CONTENT_WITHOUT_AUTH = `${USER}/increase-like-count`;
export const GET_QUIZ_DETAILS = `${USER}/get-child-content-quiz-details`;
export const GET_HELP_IMPROVE = `${USER}/help-us-to-improve`;
export const POST_HELP_IMPROVE = `${USER}/help-us-to-improve`;
export const USER_QUERIES = `${USER}/user-queries`;
export const SOCIAL_LOGIN = `${USER}/social-login-signup`;

export const INPROGRESS_GET = `${USER}/get-inprogress-groups?sortBy=listOrder&sortType=asc`;
export const COMPLETED_GET = `${USER}/get-resource-groups-by-activity?action=COMPLETED&page=1&limit=4&sortBy=listOrder&sortType=asc`;
export const SAVED_GET = `${USER}/get-resource-groups-by-activity?action=SAVED&page=1&limit=4&sortBy=listOrder&sortType=asc`;

export const COURSE_REGISTERATION = (slug: string) =>
  `user/primary-concerns-registration?slug=${slug}`;

export const COURSE_REGISTERATION_POST = `user/primary-concerns-registration`;
