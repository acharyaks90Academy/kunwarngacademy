'use strict';

/**
 * @ngdoc service
 * @name printdigtsApp.producService
 * @description
 * # producService
 * Service in the printdigtsApp.
 */
angular.module('printdigtsApp')
  .service('producService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.twoSum = function(){
// return arguments[0]
 var sum = 0;
 for(var i=0; i<arguments.length; i++){
   console.log(i);
   sum += arguments[i];
 
 }
 return sum;
};
this.sideNavLinks = function($scope){
       $http({
	    method: 'GET',
	    url: 'json/productDetail.json'
	   
	  }).then(function successCallback(response) {
     $scope.sideNavLinks = response.data.sideNavMenu;
	   $scope.productTable = response.data.productTableData;
     $scope.productDetail = response.data.productListData; 
     

    
	  }, function errorCallback(response) {
	        console.log("Data Not Find");
	  });
      return 1; 
    };
  });
