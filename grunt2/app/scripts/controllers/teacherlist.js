'use strict';

/**
 * @ngdoc function
 * @name kunwarAcadApp.controller:TeacherlistCtrl
 * @description
 * # TeacherlistCtrl
 * Controller of the kunwarAcadApp
 */
angular.module('kunwarAcadApp')
  .controller('TeacherlistCtrl', function ($scope,$rootScope, dataService,local) {
   
 
	//$scope.list = $rootScope.teachers;
	//$scope.list = localStorage.faculityList
	//$scope.list = JSON.parse(sessionStorage.faculityList);
	$scope.list = $rootScope.fmyList;
	$scope.perferenceList = local.giveperferences();//["Morning", "Afternoon", "Evening", "Night"];
	
	$scope.registerEdit = function(index){
			dataService.editRecord($scope, index);
	};
	$scope.registerDelete = function(index){
		
		//alert($scope.list.splice(index,1));
		$scope.number = index
		alert($scope.number);
		$scope.list.splice(index,1)
	} ;
	$scope.registerSub = function() {
		
		$scope.list[$scope.listNumber] = $scope.person ;	
				
		
	};
	$scope.addQualification = function(){
	$scope.person.qualification.push({"subject":""});
	
};
$scope.getSum = function(){
		return local.anotherMethod();
	};

});	