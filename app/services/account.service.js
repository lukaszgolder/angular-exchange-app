(function () {
  'use strict';

  angular
    .module('app')
    .service('AccountService', AccountService);

  AccountService.$inject = [];

  /* @ngInject */
  function AccountService() {
    var service = this;

    this.addCurrency = addCurrency;
    this.addTransaction = addTransaction;
    this.validate = validate;

    this.currencies = [];
    this.transactions = [];

    activate();

    function activate() {
      service.addCurrency({
        amount: 1000,
        currency: 'EUR'
      });
    }

    function addCurrency(currencyAccount) {
      service.currencies.push(currencyAccount);

      return service.currencies[service.currencies.length - 1];
    }

    function addTransaction(transaction) {
      service.transactions.push(transaction);
    }

    function validate(amount, source) {
      var found, currency;

      found = service.currencies.some(function (element) {
        if (element.currency === source) {
          currency = element;
          return true;
        }

        return false;
      });

      if (!found) {
        return false;
      }

      return currency.amount >= amount;
    }
  }

})();

