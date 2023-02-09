export enum CheckBoxType {
  parent = 1,
  child = 2,
}

export enum SOCIAL_TYPE {
  facebook = "FACEBOOK",
  apple = "APPLE",
  google = "GOOGLE",
  magic = "MAGICPASS",
}

export enum SOCIAL_ID {
  facebook = "facebookId",
  apple = "appleId",
  google = "googleId",
}

export enum SOCIAL_REGISTRATION_TYPE {
  SOCIAL_REGITERATION = 1,
  REG_FB = 1,
  REG_GOOGLE = 2,
  REG_APPLE = 3,
}

export enum DEVICE_TYPE {
  androi = 1,
  ios = 2,
  web = 3,
}
export enum NOTIFICATION_STATUS {
  ENABLE = 1,
  DISABLE = 0,
}
export enum PAYMENT_STATUS {
  PENDING = 0,
  SUCCESS = 1,
  FAILURE = 2,
  CANCELLED = 4,
}

export enum ERROR_REG_MSG {
  NOT_REGISTERED = 400,
  PASSWORD_INCORRECT = 413,
  NOT_VERIFIED = 410,
}

export enum NOTIFICATION_TYPE {
  ACCEPT_REJECT_REQUEST = 1,
  BOOK_PROPERTY = 2,
  CANCEL_BOOK_PROPERTY = 3,
  ADMIN_BULK = 4,
  BOOKING_SUCCESS_USER = 5,
  BOOKING_CONFIRMED_USER = 6,
  BOOKING_REJECTED_USER = 7,
  BOOKING_SUCCESS_HOST = 8,
  BOOKING_REQUEST_HOST = 9,
  BOOKING_REQUEST_USER = 10,
  BOOKING_REQUEST_ACCEPTED_HOST = 11,
  BOOKING_REQUEST_ACCEPTED_USER = 12,
  BOOKING_REQUEST_REJECTED_HOST = 18,
  BOOKING_REQUEST_REJECTED_USER = 19,
  BOOKING_CANCELLED_USER = 13,
  BOOKING_CANCELLED_HOST = 14,
  USER_PB_VERIFICATION_SUCCESS = 15,
  USER_PB_VERIFICATION_FALSE = 17,
  SCHEDULED_DEMO = 20, //duplicate value
}

export enum IS_GUEST_USER {
  INACTIVE = 0,
  ACTIVE = 1,
}

export enum RESTAURANT_DELIVERY_TYPE {
  PICKUP = 0,
  DELIVERY = 1,
}

export enum TRACK_ORDER_STATUS {
  awaited = 0,
  inKitchen = 1,
  onTheWay = 2,
  delivered = 3,
  cancelled = 4,
  pending = 10,
  notConfirmed = 9,
}

export enum ORDER_STATUS {
  "Awaited" = 0,
  "In Kitchen" = 1,
  "On the way" = 2,
  "Delivered" = 3,
  "Cancelled" = 4,
  "Pending" = 10,
  "Not Confirmed" = 9,
}

export enum ANALYTICS_CATEGORY {
  "Biryani" = "CLICKED_ON_BIRYANI_CATEGORY",
}

export enum PAGE_DATA_TYPE {
  QUICKACTIVITY = 1,
  URGENTHELP = 2,
  FETUREDPOST = 3,
}

export enum CONTENT_TYPE {
  IMAGE = "Article",
  VIDEO = "Video",
  QUESTION = "Quiz",
  STANDALONEPAGE = "StandalonePage",
  QUICKFEATURED = "Quick",
  EXTERNALLINK = "Externallink",
}

export enum RELATED_ARTICLES {
  PARENTCONTENT = 1,
  CHILDCONTENT = 2,
}

export enum MODULE_TYPES {
  SERIESCATEGORIES = "SERIESCATEGORIES",
  SERIESCONTENT = "SERIESCONTENT",
}

export enum STATIC_CONTENT_CMS {
  ABOUT_US = "about-us",
  PRIVACY_POLICY = "privacy-policy",
  COOKES = "cookies",
  TERMS = "terms-n-condition",
  URGENTHELP = "urgent-help",
  HOME_PAGE = "homePage",
}

export enum MAT_DIALOG_RESPONSE {
  CLOSE = 0,
  SUCCESS = 1,
}

export enum GoogleAnalyticsEventNames {
  like = "resource_liked",
  saved = "resource_bookmarked",
  share = "resource_shared",
  complete = "resource_completed",
  inprogress = "resource_in_progress",
  search = "discover_search",
}
export enum GoogleAnalyticsEventActions {
  like = "like",
  complete = "complete",
  share_fb = "share_facebook",
  share_twitter = "share_twitter",
  share_url = "share_url",
  inprogress = "in_progress",
  search = "search",
  saved = "bookmarked",
}

export enum IconTypes {
  Video = "Video",
  Quiz = "Quiz",
  Activity = "Activity",
  Audio = "Audio",
  Article = "Article",
  CourseProgram = "CourseProgram",
  Course ="Course",
  ExternalLink = "ExternalLink",
}
 