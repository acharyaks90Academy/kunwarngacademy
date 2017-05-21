'use strict';

/**
 * @ngdoc function
 * @name kunwarAcadApp.controller:StudentlistCtrl
 * @description
 * # StudentlistCtrl
 * Controller of the kunwarAcadApp
 */
angular.module('kunwarAcadApp')
  .controller('StudentlistCtrl',StudentlistCtrl );

  	StudentlistCtrl.$inject = ['$scope', '$timeout', '$http'];

  	function StudentlistCtrl($scope, $timeout, $http) {
    


	
	$scope.recorddeletemessage=false;

	$scope.editRec=false;


	$scope.dummyData= JSON.parse(localStorage.myList);
   

	$scope.deleteRecord = function(deleterow){
		$scope.dummyData.splice(deleterow, 1);
		$scope.recorddeletemessage=true;

		$timeout (function(){
			$scope.recorddeletemessage=false;
		},1000);
	};

	$scope.editRecord = function(index){
		
		//console.log($scope.studentForm = ($scope.dummyData[index]))
		$scope.studentForm = angular.copy($scope.dummyData[index]);		
		$scope.indexHold=index;
		$scope.editRec=true;



	};
	
	
};