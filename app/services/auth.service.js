(function () {
  'use strict';

  angular
    .module('app')
    .service('AuthService', AuthService);

  AuthService.$inject = [];

  /* @ngInject */
  function AuthService() {
    this.login = login;
    this.logout = logout;
    this.getUser = getUser;
    this.isAuthorized = isAuthorized;

    function login(user, password) {
      if (user === 'username' && password === 'password') {
        localStorage.setItem('username', user);
        return true;
      }

      return false;
    }

    function logout() {
      localStorage.removeItem('username');
    }

    function getUser() {
      return localStorage.getItem('username');
    }

    function isAuthorized() {
      return getUser() !== null;
    }
  }

})();

