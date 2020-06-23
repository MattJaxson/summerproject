// Production Environment App


import 'zone.js/dist/zone-error';

const ip = '18.222.217.94';
const baseUrl = `http://${ip}:3000`;

export const environment = {
  production: true,
  url: baseUrl
};
