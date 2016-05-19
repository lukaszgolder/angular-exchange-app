(function () {
  'use strict';

  angular
    .module('app')
    .constant('API_URL', 'http://api.fixer.io/')
    .constant('CURRENCIES', [
      'CHF',
      'GBP',
      'EUR',
      'PLN',
      'USD'
    ]);

})();