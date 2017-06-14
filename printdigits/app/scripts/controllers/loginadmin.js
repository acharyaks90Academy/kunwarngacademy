'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:LoginadminCtrl
 * @description
 * # LoginadminCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('LoginadminCtrl', function ($scope, $rootScope, $log, $http, $location,$timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.errorMessage = false;

    $scope.loginSubmit = function () {
      if ($scope.myUsername == null || $scope.myUsername == "" || $scope.myPassword == null || $scope.myPassword =="") {
        $scope.errorMessage = true;
      } else if ($scope.myUsername == $scope.myPassword) {
        $location.path("/adminmain");
      } else {
        alert("Username and password should be same")
      }


      $timeout (function(){

        $scope.errorMessage = "";

      },2500)




    }


  });
