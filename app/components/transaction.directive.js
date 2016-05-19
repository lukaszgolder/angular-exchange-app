(function () {
  'use strict';

  angular
    .module('app')
    .directive('transaction', transaction);

  transaction.$inject = [];

  /* @ngInject */
  function transaction() {
    var directive = {
      bindToController: true,
      controller: TransactionController,
      controllerAs: 'vm',
      restrict: 'AE',
      scope: {
        transaction: '='
      },
      require: 'transaction',
      templateUrl: 'app/components/transaction.directive.html'
    };

    return directive;
  }

  TransactionController.$inject = [];

  /* @ngInject */
  function TransactionController() {
    var vm = this;

    this.result = result;

    function result() {
      return (vm.transaction.amount * vm.transaction.rate).toFixed(2);
    }
  }

})();

