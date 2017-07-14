'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('CategoryCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };






  

  });
