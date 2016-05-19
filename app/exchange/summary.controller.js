(function () {
  'use strict';

  angular
    .module('app')
    .controller('SummaryController', SummaryController);

  SummaryController.$inject = [];

  /* @ngInject */
  function SummaryController() {
    var vm = this;

    activate();

    function activate() {
      vm.account = {
        currencies: [
          {
            amount: 1000,
            currency: 'EUR'
          },
          {
            amount: 500,
            currency: 'USD'
          }
        ]
      }
    }
  }

})();

