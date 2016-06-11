/**
 *
 * 5. SERWISY
 *
 *    - angular.service
 *    - $q.when
 *
 */

(function () {
  'use strict';

  angular
    .module('app')
    .service('AuthService', AuthService);

  AuthService.$inject = ['$q'];

  /* @ngInject */
  function AuthService($q) {
    var service = this;

    this.login = login;
    this.logout = logout;
    this.isAuthorized = isAuthorized;

    function login(user, password) {
      if (user === 'username' && password === 'password') {
        service.authorized = true;
        return true;
      }

      return false;
    }

    function logout() {
      service.authorized = false;
    }

    function isAuthorized() {
      return $q.when(service.authorized);
    }
  }

})();

