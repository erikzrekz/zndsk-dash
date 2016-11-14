'use strict';

var config = require('../config');

var zendeskCore = require('node-zendesk').createClient({
  username: config.zendesk.username,
  token: config.zendesk.token,
  remoteUri: 'https://' + config.zendesk.subdomain + '.zendesk.com/api/v2/'
});

var zendeskVoice = require('node-zendesk').createClient({
  username: config.zendesk.username,
  token: config.zendesk.token,
  remoteUri: 'https://' + config.zendesk.subdomain + '.zendesk.com/api/v2/channels/voice',
  voice: true
});

var getCurrentAgentActivity = function(callback) {
  var agents = [];
  var agentID;

  zendeskVoice.agentactivity.show(function(err, res, currentAgentActivity) {
    if (err || !res) {
      console.log('Get current agent activity', {
        error: err
      });
      callback(err, null);
    } 

    for (var x in currentAgentActivity.agents_activity) {
      agentID = currentAgentActivity.agents_activity[x].agent_id;
      if (config.zendesk.agentsIncludeList.indexOf(agentID) != -1) {
        currentAgentActivity.agents_activity[x].name = currentAgentActivity.agents_activity[x].name.split(' ')[0];
        agents.push(currentAgentActivity.agents_activity[x]);
      }
    }

    console.log(agents);

    callback(null, agents);
  });
};

var getCurrentQueueActivity = function(callback) {
  zendeskVoice.currentqueueactivity.show(function(err, res, currentQueueActivity) {
    if (err || !res) {
      console.log('Get current queue activity', {
        error: err
      });
      callback(err, null);
    } else {
      callback(null, currentQueueActivity);
    }
  });
};

var getHistoricalQueueActivity = function(callback) {
  zendeskVoice.historicalqueueactivity.show(function(err, res, historicalQueueActivity) {
    if (err || !res) {
      console.log('Get historical queue activity', {
        error: err
      });
      callback(err, null);
    } else {
      callback(null, historicalQueueActivity);
    }
  });
};

var findCustomer = function(email, callback) {
  zendeskCore.users.search('?query=' + encodeURIComponent(email), function(err, res, results) {
    if (err || !res) {
      console.log('Search for customer in Zendesk error', {
        error: err
      });
      callback(err, null);
    } else if (typeof results[0] === 'undefined') {
      callback(null, null);
    } else {
      callback(null, results[0]);
    }
  });
};

var getTickets = function(zendeskProfile, callback) {
  if (zendeskProfile === null) {
    return callback(null, null);
  }

  zendeskCore.tickets.listByUserRequested(zendeskProfile.id, function(err, res, tickets) {
    if (err || !res) {
      console.log('Get ticket in Zendesk error', {
        error: err
      });
      callback(err, null);
    } else if (typeof tickets === 'undefined') {
      callback(null, null);
    } else {
      callback(null, tickets);
    }
  });
};

var getTicketsFromView = function(id, callback) {

  zendeskCore.views.tickets(id, function(err, res, tickets) {
    if (err || !res) {
      console.log('Get ticket in Zendesk error', {
        error: err
      });
      callback(err, null);
    } else {
      callback(null, tickets);
    }
  });
};



module.exports = {
  getCurrentQueueActivity: getCurrentQueueActivity,
  getCurrentAgentActivity: getCurrentAgentActivity,
  getHistoricalQueueActivity: getHistoricalQueueActivity,
  findCustomer: findCustomer,
  getTickets: getTickets,
  getTicketsFromView: getTicketsFromView
};
