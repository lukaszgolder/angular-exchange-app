(function () {
  'use strict';

  angular
    .module('app')
    .service('TransactionService', TransactionService);

  TransactionService.$inject = ['$http', '$q', 'API_URL', 'AccountService'];

  /* @ngInject */
  function TransactionService($http, $q, API_URL, AccountService) {
    var service = this;

    this.getRates = getRates;
    this.exchange = exchange;
    this.result = result;
    this.create = create;

    this.rates = {};

    function getRates(base) {
      return $http.get(API_URL + '/latest?base=' + (base || 'EUR'))
        .then(function (response) {
          service.rates[base] = response.data.rates;

          return response.data.rates;
        });
    }

    function exchange(amount, source, target) {
      if (service.rates[source]) {
        return $q.when(service.result(amount, service.rates[source][target]));
      }

      return service.getRates(source)
        .then(function (response) {
          return service.result(amount, response[target]);
        });
    }

    function result(amount, rate) {
      return (amount * rate).toFixed(2);
    }

    function create(amount, source, result, target) {
      AccountService.addTransaction({
        amount: amount,
        source: source,
        target: target,
        rate: service.rates[source][target],
        date: new Date()
      });

      var sourceCurrency, targetCurrency;

      AccountService.currencies.some(function (element) {
        if (element.currency === source) {
          sourceCurrency = element;
        } else if (element.currency === target) {
          targetCurrency = element;
        }

        return !!sourceCurrency && !!targetCurrency;
      });

      if (!targetCurrency) {
        targetCurrency = AccountService.addCurrency({
          amount: 0,
          currency: target
        });
      }

      sourceCurrency.amount -= Number(amount);
      targetCurrency.amount += Number(result);
    }
  }

})();

