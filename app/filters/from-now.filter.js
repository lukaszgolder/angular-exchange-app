/**
 *
 * 4. FILTRY
 *
 *    - Deklaracja
 *
 */

(function () {
  'use strict';

  angular
    .module('app')
    .filter('fromNow', function () {
      return function(date) {
        return moment(date).fromNow();
      };
    });

  

})();

