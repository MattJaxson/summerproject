// Production Environment App


import 'zone.js/dist/zone-error';

const ip = '18.218.236.99';
const baseUrl = `http://${ip}:3000`;

export const environment = {
  production: true,
  url: baseUrl
};
