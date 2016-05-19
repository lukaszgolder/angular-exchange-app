(function () {
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$state', 'AuthService'];

  /* @ngInject */
  function LoginController($state, AuthService) {
    var vm = this;

    this.onSubmit = onSubmit;

    activate();

    function activate() {
      vm.message = '';
    }

    function onSubmit(username, password) {
      if (!AuthService.login(username, password)) {
        vm.message = 'Nieprawidłowe dane';

        return false;
      }

      $state.go('exchange');
      return true;
    }
  }

})();

