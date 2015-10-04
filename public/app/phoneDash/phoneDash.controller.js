'use strict';

/* Controllers */

angular.module('zndskDash')
  .controller('PhoneDashCtrl', PhoneDashCtrl);

  PhoneDashCtrl.$inject = ['$routeParams', 'apiService', '$q', '$interval', '$timeout'];

  function PhoneDashCtrl ($routeParams, apiService, $q, $interval, $timeout) {
      var vm = this;
      var getCurrentPhoneQueue = function() {
          var defer = $q.defer();
          var pollForPhoneQueue = function() {
            apiService.getCurrentPhoneQueue().$promise.then(function(data) {
                vm.currentQueue = data;
                defer.resolve(data);

                $timeout(pollForPhoneQueue, 3000);
            });
            return defer.promise;
          }
          pollForPhoneQueue();
      };

      var getHistoricalPhoneQueue = function() {
          var defer = $q.defer();
          var pollForPhoneQueue = function() {
            apiService.getHistoricalPhoneQueue().$promise.then(function(data) {
                vm.historicalQueue = data;
                defer.resolve(data);
                $timeout(pollForPhoneQueue, 3000);
            });
            return defer.promise;
          }
          pollForPhoneQueue();
      };

      var getAgentsActivity = function() {
          var defer = $q.defer();
          var pollForAgentsActivity = function() {
            apiService.getAgentsActivity().$promise.then(function(data) {
                vm.agents = data;
                vm.totalCalls = 0;
                for (var x in data) {
                  if (data[x].calls_accepted) {
                    vm.totalCalls += data[x].calls_accepted;
                  }
                }
                defer.resolve(data);
                $timeout(pollForAgentsActivity, 3000);
            });
            return defer.promise;
          }
          pollForAgentsActivity();
      };

      var init = function() {
          getCurrentPhoneQueue();
          getHistoricalPhoneQueue();
          getAgentsActivity();
      };

      init();
  }