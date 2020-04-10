// Production Environment

import 'zone.js/dist/zone-error';

const ip = '18.218.236.99';
const baseUrl = `${ip}:3000`;

const url = baseUrl + '/api';    //local host


export const environment = {
  production: true,
  url: baseUrl
};
