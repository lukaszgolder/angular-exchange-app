(function () {
  'use strict';

  angular
    .module('app')
    .controller('SummaryController', SummaryController);

  SummaryController.$inject = ['AccountService'];

  /* @ngInject */
  function SummaryController(AccountService) {
    var vm = this;

    activate();

    function activate() {
      vm.currencies = AccountService.currencies;
    }
  }

})();

