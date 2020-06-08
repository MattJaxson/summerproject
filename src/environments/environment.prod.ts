// Production Environment App


import 'zone.js/dist/zone-error';

const ip = '18.220.2.84';
const baseUrl = `http://${ip}:3000`;

export const environment = {
  production: true,
  url: baseUrl
};
