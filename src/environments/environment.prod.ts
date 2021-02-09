// Production Environment App

const ip = '3.135.225.140';
const fairIp = '18.191.35.201';

const baseUrl = `http://${ip}:3000`;
const fairsUrl = `http://${fairIp}:4000`;

export const environment = {
  production: true,
  url: baseUrl,
  fairsUrl: fairsUrl
};
