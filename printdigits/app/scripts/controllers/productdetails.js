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
	    url: 'json/sideNav.json'
	   
	  }).then(function successCallback(response) {
	    $scope.productDetail = response.data.sideNavMenu;
	    $scope.productTable = response.data.productTableData;

	  }, function errorCallback(response) {
	        alert("Data Not Find");
	  });
    }

    $scope.data();

    
});