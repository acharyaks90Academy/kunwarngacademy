'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:ProductdetailsCtrl
 * @description
 * # ProductdetailsCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('ProductdetailsCtrl', function ($scope, $http, producService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  
	  $scope.productDetail = [];
    $scope.productTable = [];

  producService.sideNavLinks($scope);
  console.log(producService.twoSum(1,2));
  

});