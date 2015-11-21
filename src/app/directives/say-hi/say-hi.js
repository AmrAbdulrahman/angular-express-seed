(function() {
  'use strict';

  angular
    .module('ngApp')
    .directive('sayHi', function () {
      return {
        templateUrl: 'app/directives/say-hi/say-hi.html'
      };
    });
})();