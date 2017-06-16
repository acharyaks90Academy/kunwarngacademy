'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:Heatproduct1Ctrl
 * @description
 * # Heatproduct1Ctrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('productdetailCtrl', function ($scope, $rootScope, $log, $http, $location,$timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];




  $scope.noDataFound = false;

  $http({
          method: 'GET',
          url: 'json/productdetaildata.json'
        }).then(function successCallback(response) {
          $scope.productData = response.data.records;
          $scope.productDataSecond= response.data.productDetailsData;       
        }, function errorCallback(response) {
          $scope.noDataFound = true;

        });

  });
