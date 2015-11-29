(function() {
  'use strict';

  angular
    .module('ngApp')
    .controller('LandingCtrl', (calculatorService) => {
      calculatorService.add('a', -1);
      let x = 1;
      const Y = 3;
    });
})();