(function () {
  'use strict';

  angular
    .module('app')
    .directive('transaction', transaction);

  transaction.$inject = [];

  /* @ngInject */
  function transaction() {
    var directive = {
      restrict: 'AE',
      scope: {
        transaction: '='
      },
      templateUrl: 'app/components/transaction.directive.html'
    };

    return directive;
  }

})();