// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const url is commented out depending on which you are testing with.
//local host is for local machine and 10.0.2.2 is for android testing

const baseUrl = 'http://localhost:3000';
// const baseUrl = "http://192.168.0.18:3000";    //local host for DevApp
// const baseUrl = "https://apidev.todoolie.com";    //local host for DevApp

const url = baseUrl + '/api';    //local host

export const environment = {
  production: false,
  url: baseUrl,
  registerUrl: url + '/users',
  findUserUrl: url + '/users/current'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
