'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:LoginadminCtrl
 * @description
 * # LoginadminCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('LoginadminCtrl', function ($scope, $rootScope, $log, $http, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.login = "login page"

    $scope.loginSubmit = function () {



      if ($scope.myUsername == null || $scope.myUsername == "" || $scope.myPassword == null || $scope.myPassword =="") {
        alert("Please Enter Username/Password");
      } else if ($scope.myUsername == $scope.myPassword) {
        $location.path("/adminmain");
      } else {
        alert("Username and password should be same")
      }







    }


  });
