'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('CommonCtrl', function ($scope, $http, $rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
    method: 'GET',
    url: 'json/menu.json'
  }).then(function successCallback(response) {
    $scope.menu = response.data.mainMenu;

  }, function errorCallback(response) {
    $scope.noDataFound = true;

  });

   

   var d = new Date();
    var n = d.getFullYear();
   
        $scope.dateTme = n;

  });
