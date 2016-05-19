(function () {
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['AuthService'];

  /* @ngInject */
  function LoginController(AuthService) {
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

      return true;
    }
  }

})();

