'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('CommonCtrl', function ($scope, $http, $rootScope, $location, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
      method: 'GET',
      url: 'json/demoData.json'
    }).then(function successCallback(response) {
      $scope.menu = response.data.mainMenu;
      $scope.listPro = response.data.productList;

    }, function errorCallback(response) {
      $scope.noDataFound = true;

    });

    $scope.emailErrorMessage = false;
    $scope.emailSuccessMessage = false;

    $scope.submitNewsletter = function () {

      var emailName = document.newsLetter.newsEmail.value;
      var atposition = emailName.indexOf("@");  
      var dotposition = emailName.lastIndexOf(".");  

      if (atposition<1 || dotposition<atposition+2 || dotposition+2>=emailName.length) {
        $scope.emailErrorMessage = true;

        $timeout(function () {
          $scope.emailErrorMessage = false;

        }, 1000)

      } else {
        $scope.emailSuccessMessage = true;


        $timeout(function () {
          $scope.emailErrorMessage = false;

        }, 500)

      }



    }


    var d = new Date();
    var n = d.getFullYear();

    $scope.dateTme = n;

  });
