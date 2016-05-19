(function () {
  'use strict';

  angular
    .module('app')
    .controller('ExchangeFormController', ExchangeFormController);

  ExchangeFormController.$inject = ['TransactionService', 'CURRENCIES'];

  /* @ngInject */
  function ExchangeFormController(TransactionService, CURRENCIES) {
    var vm = this;

    this.onAmountChanged = onAmountChanged;
    this.onResultChanged = onResultChanged;
    this.onSourceChanged = onSourceChanged;
    this.onTargetChanged = onTargetChanged;
    this.exchange = exchange;

    activate();

    function activate() {
      vm.controls = {
        amount: 0,
        result: 0,
        source: 'EUR',
        target: 'PLN'
      };

      vm.currencies = CURRENCIES;
    }

    function onAmountChanged() {
      if (vm.controls.amount > 1) {
        vm.exchange();
      }
    }

    function onResultChanged() {
      if (vm.controls.result > 1) {
        vm.exchange('target');
      }
    }

    function onSourceChanged() {
      if (vm.controls.source !== vm.controls.target) {
        vm.exchange();
      }
    }

    function onTargetChanged() {
      if (vm.controls.source !== vm.controls.target) {
        vm.exchange('target');
      }
    }

    function exchange(dir) {
      TransactionService.exchange(vm.controls.amount, vm.controls.source, vm.controls.target)
        .then(function (response) {
          if (dir === 'target') {
            vm.controls.amount = Number(response);
          } else {
            vm.controls.result = Number(response);
          }
        });
    }
  }

})();

