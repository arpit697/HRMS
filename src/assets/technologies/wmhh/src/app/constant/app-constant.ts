import {} from "./enums";
import { FILE_FORMAT_MESSGAES } from "./messages";

export enum CONTENT_TYPE {
  video = "Video",
  question = "Quiz",
  image = "Article",
  audio = "Audio",
  standAlonePage = "StandalonePage",
  QUICKFEATURED = "Quick",
  EXTERNALLINK = "Externallink",
}
export const IMAGE_FORMAT = "image/jpeg,image/png,image/jpg";
export const VIDEO_FORMAT = "video/mp4,video/x-m4v,video/*";
export const AUDIO_FORMAT = "audio/mpeg,audio/mp3";

export const MAX_SIZE_ERROR = (size = MAX_IMAGE_SIZE) =>
  `Image of ${size} not allowed`;

export const DOCUMENT_FORMAT =
  "image/jpeg,image/png,image/jpg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,.doc";

export const DOCUMENT_FORMAT_ERROR =
  FILE_FORMAT_MESSGAES.INVALID_DOCUMENT_FORMAT.replace(
    "$format$",
    ".png/.jpg/.jpeg/.pdf/.doc/.docx"
  );
export const IMAGE_FORMAT_ERROR =
  FILE_FORMAT_MESSGAES.INVALID_IMAGE_FORMAT.replace("$format$", "jpeg/png");
export const VIDEO_FORMAT_ERROR =
  FILE_FORMAT_MESSGAES.INVALID_VIDEO_FORMAT.replace("$format$", "video/mp4");

export const CHAT_FILE_ERROR =
  FILE_FORMAT_MESSGAES.INVALID_CHAT_FILE_FORMAT.replace(
    "$format$",
    "video/mp4,.png/.jpg/.jpeg/.pdf/.doc/.docx,audio/mp3"
  );
export const MAX_IMAGE_SIZE = 10;

export const MAX_DOCUMENT_SIZE = 10;

export const MAX_IMAGE_LENGTH = 50;

export const MIN_IMAGE_LENGTH = 5;

export const CHAT_MESSAGES_PAGE_LIMIT = 100;
export const CHAT_INBOX_PAGE_LIMIT = 2;

export const CHAT_MAX_FILE_SIZE = 100; // mb

export const HOME_SECTIONS_IDS = {
  LOCATION: "location-section",
  PARTNER: "partner-section",
};
export const PROFILE_DETAILS_IDS = {
  ABOUT: "about-section",
  AMENITIES: "amenities-section",
  CATEGORY: "category-price-section",
  RATING: "rating-review-section",
};

export const PAGE_KEY = "page";
export const LIMIT_KEY = "limit";
export const PAGE_START = 1;
export const PROPERTY_PAGINATION = 10;
export const MAX_LOCATION_COUNT = 5;

export const PAGE_OPTIONS = {
  page: PAGE_START,
  limit: PROPERTY_PAGINATION,
};

export const DISCOVER_FILTER_OPTIONS = {
  goalSlug: null,
  sectorSlug: null,
  timeduration: null,
};
export const PAGE_OPTIONS_100 = {
  page: PAGE_START,
  limit: 100,
};
export const SMALL_PAGE_OPTIONS = {
  page: 1,
  limit: 5,
};

export const PAGE_OPTIONS_12 = {
  page: PAGE_START,
  limit: 12,
};

export const RANGE_UPDATE_TIME = 1000; // in ms

export const customHeader = {
  devicedetails: {
    token: "aefdinewfewnfewkfwe",
    deviceId: "nmmzzefewfwf",
    type: 1,
  },
  offset: new Date().getTimezoneOffset(),
};

export const YEAR_START = new Date().getFullYear();
export const YEAR_RANGE = new Date().getFullYear() + 20;

export const MY_FORMATS = {
  parse: {
    dateInput: "MMM DD, yyyy",
  },
  display: {
    dateInput: "MMM DD, yyyy",
    monthYearLabel: "YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "YYYY",
  },
};

export const FAQ_URL = "https://admin.paradisefoodcourt.in/faq/";
export const TERMS_OF_USE = "https://admin.paradisefoodcourt.in/terms/";
export const PRIVACY = "https://admin.paradisefoodcourt.in/privacy/";

export enum SIGNUPSOURCE {
  normal = "NORMAL",
  apple = "APPLE",
  google = "GOOGLE",
  facebook = "FACEBOOK",
  magic_pass = "MAGICPASS",
}

export enum ACTIVITYACTION {
  LIKE = "LIKE",
  DISKIKE = "DISKIKE",
  SAVED = "SAVED",
  INPROGRESS = "INPROGRESS",
  COMPLETED = "COMPLETED",
  QUIZ = "QUIZ",
}
export enum MODULENAMES {
  SERIESCONTENT = "SERIESCONTENT", //child content
  SERIESCATEGORIES = "SERIESCATEGORIES", //parent content
  TAGS = "TAGS",
  GOALS = "GOALS",
  SECTORS = "SECTORS",
}

export const TIME_ARRAY: Array<any> = [5, 10, 15, 20, 30, 60];

export const TIME_ARRAY_OBJECT = [
  {
    _id: "2",
    time: "2 Minutes",
  },
  {
    _id: "5",
    time: "5 Minutes",
  },
  {
    _id: "10+",
    time: "10+ Minutes",
  },
  // {
  //   _id: 20,
  //   time: "20 Minutes",
  // },
  // {
  //   _id: 30,
  //   time: "30 Minutes",
  // },
  // {
  //   _id: 60,
  //   time: "60 Minutes",
  // },
];

export const PAGE_LIMIT_3 = {
  page: 1,
  limit: 3,
};

export const PAGE_LIMIT_DEFAULT = {
  page: 1,
  limit: 10,
};

export const YOUTUBE_VIDEO_URLS = [
  /^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,
  /^(?:m\.)?youtube\.com\/v\/([\w-]+)/,
  /^youtube\.com\/embed\/([\w-]+)/,
  /^youtu\.be\/([\w-]+)/,
];

export const VIMEO_VIDEO_URLS = [
  /^vimeo\.com\/(\d+)/,
  /^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,
  /^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,
  /^vimeo\.com\/channels\/[^/]+\/(\d+)/,
  /^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,
  /^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,
  /^player\.vimeo\.com\/video\/(\d+)/,
];

export const YOUTUBE_VIMEO_REGEX =
  /^.*((youtu.be\/|vimeo.com\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;

export const NUMBER_WORDS = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
};

export const DESCRIBE_WORKPLACE = [
  {
    value: "Restaurant, bar or nightclub",
    viewValue: "Restaurant, bar or nightclub",
  },
  {
    value: "Hotel or motel",
    viewValue: "Hotel or motel",
  },
  {
    value: "Adventure or vacation destination (e.g.: ski hill)",
    viewValue: "Adventure or vacation destination (e.g.: ski hill)",
  },
  {
    value: "Community social service",
    viewValue: "Community social service",
  },
  {
    value: "Other",
    viewValue: "Other",
  },
];

export const DESCRIBES_ROLE = [
  {
    value: "Customer/client-facing employee",
    viewValue: "Customer/client-facing employee",
  },
  {
    value: "Administrative employee",
    viewValue: "Administrative employee",
  },
  {
    value: "Customer/client-facing manager or supervisor",
    viewValue: "Customer/client-facing manager or supervisor",
  },
  {
    value: "Administrative manager or supervisor",
    viewValue: "Administrative manager or supervisor",
  },
  {
    value: "Employer/Owner/Operator",
    viewValue: "Employer/Owner/Operator",
  },
  {
    value: "Other",
    viewValue: "Other",
  },
];
