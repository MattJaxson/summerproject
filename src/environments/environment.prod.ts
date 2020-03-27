import 'zone.js/dist/zone-error';

const ip = '10.0.1.2';
const baseUrl = `http://${ip}:3000`;

const url = baseUrl + '/api';    //local host


export const environment = {
  production: true,
  url: baseUrl
};
