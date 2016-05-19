(function () {
  'use strict';

  angular
    .module('app')
    .controller('HistoryController', HistoryController);

  HistoryController.$inject = [];

  /* @ngInject */
  function HistoryController() {
    var vm = this;

    activate();

    function activate() {
      vm.list = [
        {
          amount: 100,
          source: 'EUR',
          target: 'USD',
          rate: 1.1427,
          date: new Date()
        },
        {
          amount: 300,
          source: 'EUR',
          target: 'PLN',
          rate: 4.4198,
          date: new Date()
        }
      ];
    }
  }

})();