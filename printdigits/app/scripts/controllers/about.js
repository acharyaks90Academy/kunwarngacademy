'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('AboutCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // $rootScope.showHeader = true;
  });
