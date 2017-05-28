'use strict';

/**
 * @ngdoc service
 * @name printdigtsApp.productdetail
 * @description
 * # productdetail
 * Service in the printdigtsApp.
 */
angular.module('printdigtsApp')
  .service('productdetail', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

this.sideNavLinks = function($scope){
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
      return 1; 
    }
  
this.twoSum = function(){
// return arguments[0]
 var sum = 0;
 for(var i=0; i<arguments.length; i++){
   console.log(i);
   sum += arguments[i];
 
 }
 return sum;
}

  });
