'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:ProductdetailsCtrl
 * @description
 * # ProductdetailsCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('ProductdetailsCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  
	  $scope.productDetail = [];
    $scope.productTable = [];

    $scope.data = function(){

	  $http({
	    method: 'GET',
	    url: 'json/productDetail.json'
	   
	  }).then(function successCallback(response) {
	    $scope.sideNavLinks = response.data.sideNavMenu;
	    $scope.productTable = response.data.productTableData;
      $scope.productDetail = response.data.productListData;

	  }, function errorCallback(response) {
	        alert("Data Not Find");
	  });
    }

    $scope.data();

    
});