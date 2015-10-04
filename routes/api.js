var config = require('../config');
var mock = require('../mock');

var zendesk = require('../services/zendesk');

var getCurrentPhoneQueue = function (req, res) {

  if (config.mktg) {
    return res.json(mock.current_queue_activity);
  }

  zendesk.getCurrentQueueActivity(function(err, results){
  	if (err) {
  		res.status(500).json('Error!');
  	} else {
  		res.json(results);
  	}
  });
};

var getHistoricalPhoneQueue = function (req, res) {

  if (config.mktg) {
    return res.json(mock.historical_queue_activity);
  }

  zendesk.getHistoricalQueueActivity(function(err, results){
    if (err) {
      res.status(500).json('Error!');
    } else {
      res.json(results);
    }
  });
};

var getAgentsActivity = function (req, res) {

  if (config.mktg) {
    return res.json(mock.agents_available);
  }

  zendesk.getCurrentAgentActivity(function(err, results){
    if (err) {
  		res.status(500).json('Error!');
  	} else {
      console.log(results);
  		res.json(results);
  	}
  });
};



module.exports = {
	getCurrentPhoneQueue: getCurrentPhoneQueue,
  getHistoricalPhoneQueue: getHistoricalPhoneQueue,
	getAgentsActivity: getAgentsActivity
}