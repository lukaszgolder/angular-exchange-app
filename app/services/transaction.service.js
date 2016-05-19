(function () {
  'use strict';

  angular
    .module('app')
    .service('TransactionService', TransactionService);

  TransactionService.$inject = ['$http', 'API_URL'];

  /* @ngInject */
  function TransactionService($http, $q, API_URL) {
    var service = this;

    this.getRates = getRates;
    this.exchange = exchange;
    this.result = result;

    this.rates = {};

    function getRates(base) {
      return $http.get(API_URL + '/latest?base=' + (base || 'EUR'))
        .then(function (response) {
          service.rates[base] = response.data.rates;

          return response.data.rates;
        });
    }

    function exchange(amount, source, target) {
      if (service.rates[base]) {
        return $q.when(service.result(amount, service.rates[base][target]));
      }

      return service.getRates(source)
        .then(function (response) {
          return service.result(amount, response[target]);
        });
    }

    function result(amount, rate) {
      return (amount * rate).toFixed(2);
    }
  }

})();

