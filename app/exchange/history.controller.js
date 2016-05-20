(function () {
  'use strict';

  angular
    .module('app')
    .controller('HistoryController', HistoryController);

  HistoryController.$inject = ['AccountService'];

  /* @ngInject */
  function HistoryController(AccountService) {
    var vm = this;

    activate();

    function activate() {
      vm.list = AccountService.transactions;
    }
  }

})();