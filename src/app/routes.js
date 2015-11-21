(function() {
  'use strict';

  angular
    .module('ngApp')
    .config(function($stateProvider, $urlRouterProvider, DEFAULT_STATE) {
      $urlRouterProvider.otherwise(DEFAULT_STATE);
      $urlRouterProvider.when('/', DEFAULT_STATE);
      
      $stateProvider
        .state('landing', {
          url: '/landing',
          templateUrl: 'app/states/landing/landing.html'
        });
    });
})();