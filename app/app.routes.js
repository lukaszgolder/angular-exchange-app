(function () {
  'use strict';

  angular
    .module('app')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  /* @ngInject */
  function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('exchange');
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('exchange', {
        url: '/exchange',
        template: '',
        controller: 'ExchangeController',
        controllerAs: 'vm',
        resolve: {
          auth: auth
        }
      });
  }

  auth.$inject = ['$state', 'AuthService'];

  /* @ngInject */
  function auth($state, AuthService) {
    return AuthService.isAuthorized()
      .then(function (result) {
        if (!result) {
          $state.go('login');
        }

        return true;
      });
  }

})();