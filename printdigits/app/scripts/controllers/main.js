'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('MainCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $rootScope.welcome="welcome"; 
     //$rootScope.showHeader = false;

  });
