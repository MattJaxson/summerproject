// Production Environment App

const fyfApi = 'findyourfuturesem.org';
const fairsApi = 'fairs.findyourfuturesem.org';

const baseUrl = `https://${fyfApi}:3000`;
const fairsUrl = `https://${fairsApi}:3000`;

export const environment = {
  production: true,
  url: baseUrl,
  fairsUrl: fairsUrl
};
