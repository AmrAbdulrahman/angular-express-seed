(function() {
  'use strict';

  angular
    .module('ngApp')
    .service('calculatorService', function() {
      return {
        add: function(a, b) {
          if (_.isUndefined(a) || _.isUndefined(b)) {
            throw new Error('Both arguments must be supplied');
          }

          if (_.isNaN(parseInt(a)) || _.isNaN(parseInt(b))) {
            throw new Error('Both arguments must be numeric');
          }

          return a + b;
        }
      };
    });
})();