(function () {
  'use strict';

  angular
    .module('app')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  /* @ngInject */
  function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('/exchange', '/exchange/summary');
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
        templateUrl: 'app/exchange/exchange.html',
        controller: 'ExchangeController',
        controllerAs: 'vm',
        resolve: {
          auth: auth
        }
      })
      .state('exchange.summary', {
          url: '/summary',
          templateUrl: 'app/exchange/summary.html',
          controller: 'SummaryController',
          controllerAs: 'vm'
      })
      .state('exchange.history', {
          url: '/history',
          templateUrl: 'app/exchange/history.html',
          controller: 'HistoryController',
          controllerAs: 'vm'
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