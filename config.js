var path = require('path');

module.exports = {
  port: process.env.PORT || 3333,
  root: path.normalize(path.join(__dirname, '..', '..')),
  verbose: true,
  mktg: true,
  zendesk: {
    username: process.env.ZENDESK_USERNAME || 'zed@znd.sk',
    token: process.env.ZENDESK_TOKEN || 'XXXXXXXXXXXXXXXXXXXX',
    subdomain: process.env.ZENDESK_SUBDOMAIN || 'zndsk',
    agentsExcludeList: []
  }
};
