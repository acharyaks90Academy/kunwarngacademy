'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:Heatproduct1Ctrl
 * @description
 * # Heatproduct1Ctrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('productdetailCtrl', function ($scope, $rootScope, $log, $http, $location,$timeout, demoPage) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



    $scope.helloTime = demoPage.sayHello();
    $scope.byeTime = demoPage.repeatad();
 

  $scope.noDataFound = false;

  $http({
          method: 'GET',
          url: 'json/productdetaildata.json'
        }).then(function successCallback(response) {
          $scope.productData = response.data.records;
          $scope.productDataSecond = response.data.productDetailsData; 
          $scope.productMainHeadingData = response.data.productHeadingText;       
        }, function errorCallback(response) {
          $scope.noDataFound = true;

        });

  });
