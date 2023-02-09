// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tokenKey: "wmhh",
  API_KEY: "WmHhFreshWOrK",
  ssr_port: 4200,
  mailVerifiedKey: "wmhh-verified",
  googleAnalyticsKey: "G-2Y13CVY3CF",
  saveLaterKey: "saveLater",
  OAUTH_REDIRECT_URL: "http://localhost:4200/oauth",
  MAGIC_KEY: "pk_test_59A3B48D22CEE8DD",
  // MAGIC_KEY: "pk_test_32CD84351BC31CAA", STG
  // API_BASE_PATH: "https://preprodapi.workmentalhealthbc.ca/v1/",
  // STRAPI_BASE_PATH: "https://preprodadmin.workmentalhealthbc.ca/",
  // API_BASE_PATH: "http://3.96.237.70:4567/v1/",
  //  API_BASE_PATH: "https://wmhhstgapi.appskeeper.in/v1/", //stg
  // API_BASE_PATH: "https://wmhhqaapi.appskeeper.in/v1/", //qa
  STRAPI_BASE_PATH: "https://wmhhstrapidev.appskeeper.in/",

  API_BASE_PATH: "https://wmhhdevapi.appskeeper.in/v1/", //dev
  // API_BASE_PATH: "https://api.workmentalhealthbc.ca/v1/", //preprod
  // API_BASE_PATH: "https://wmhhstgapi.appskeeper.in/v1/", //stg
  // STRAPI_BASE_PATH: "https://wmhhstrapistg.appskeeper.in/",

  url: "https://wmhhdevadmin.appskeeper.in",

  // API_BASE_PATH: "https://api.workmentalhealthbc.ca/v1/", //prod
  // STRAPI_BASE_PATH: "http://3.96.237.70:3492/",
  // STRAPI_BASE_PATH: "http://3.96.237.70:5111/",
  // STRAPI_BASE_PATH: "https://admin.workmentalhealthbc.ca/",

  FEEDBACK_FORM_URL:
    "https://docs.google.com/forms/d/e/1FAIpQLSevepiEtc2fbpdFgIV8RKkLQ4N3p-n22d_seC4dNFnE9mJeyg/viewform",
  config: {
    AWS_BUCKET: "appinventiv-development",
    AWS_ACCESS_KEY: "AKIA6DQMUBGGZSBCXSFA",
    AWS_SECRET_KEY: "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",
    AWS_REGION: "us-east-1",
  },

  FILTER_COOKIE_KEY: "filter",
  LIKE_RESOURCES: "wmmhh-likes",
  ACCEPT_COOKIES: "wmhh-cookies",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
