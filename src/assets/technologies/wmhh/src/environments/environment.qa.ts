// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  tokenKey: "wmhh",
  mailVerifiedKey: "wmhh-verified",
  API_KEY: "WmHhFreshWOrK",
  saveLaterKey: "saveLater",

  googleAnalyticsKey: "G-2Y13CVY3CF",

  API_BASE_PATH: "https://wmhhqaapi.appskeeper.in/v1/", //qa
  STRAPI_BASE_PATH: "http://3.96.237.70:5112/",
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
