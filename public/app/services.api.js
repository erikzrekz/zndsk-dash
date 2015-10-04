'use strict';

angular.module('zndskDash')
  .factory('apiService', ['$resource', 
  	function($resource) {
      var base = '/api/';
      return $resource(base, {}, {
        getCurrentPhoneQueue: {method: 'GET', url: base + 'phone/current-queue'},
        getHistoricalPhoneQueue: {method: 'GET', url: base + 'phone/historical-queue'},
        getAgentsActivity: {method: 'GET', url: base + 'phone/agents', isArray: true}
      });
    }]);
