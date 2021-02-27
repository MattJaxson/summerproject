// Production Environment App

const fyfApi = 'findyourfuturesem.org';
const fairsApi = `fairs.findyourfuturesem.org`;

const baseUrl = `https://${fyfApi}`;
const fairsUrl = `https://${fairsApi}`;

export const environment = {
  production: true,
  url: baseUrl,
  fairsUrl: fairsUrl
};
