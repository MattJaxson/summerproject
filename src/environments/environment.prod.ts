// Production Environment App

const ip = '3.133.97.204';

const baseUrl = `http://${ip}:3000`;
const fairsUrl = `http://${ip}:4000`;

export const environment = {
  production: true,
  url: baseUrl,
  fairsUrl: fairsUrl
};
