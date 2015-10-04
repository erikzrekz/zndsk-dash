'use strict';

angular.module('zndskDash')
  	.filter('secondsFormat', function() {
  	  return function(sec) {
  	    return moment().startOf('day').seconds(sec).format('H:mm:ss');
  	  };
  	})
