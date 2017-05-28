'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:ProductdetailsCtrl
 * @description
 * # ProductdetailsCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('ProductdetailsCtrl', function ($scope, $http, productdetail) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  
	  $scope.productDetail = [];
    $scope.productTable = [];

  productdetail.sideNavLinks($scope);
  console.log(productdetail.twoSum(1,2));
  

});