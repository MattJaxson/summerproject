// Production Environment App


import 'zone.js/dist/zone-error';

const ip = '10.0.1.16';
const baseUrl = `http://${ip}:3000`;

export const environment = {
  production: true,
  url: baseUrl
};
