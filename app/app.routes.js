(function () {
  'use strict';

  angular
    .module('app')
    .config(routes);

  routes.$inject = ['$routeProvider', '$locationProvider'];

  /* @ngInject */
  function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider
      .when('/login', {
          templateUrl: 'app/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
      });
  }

})();