'use strict';

/**
 * @ngdoc function
 * @name kunwarAcadApp.controller:TeacherlistCtrl
 * @description
 * # TeacherlistCtrl
 * Controller of the kunwarAcadApp
 */
angular.module('kunwarAcadApp')
  .controller('TeacherlistCtrl', function ($scope,$rootScope) {
    
 
	//$scope.teacherList = $rootScope.teachers;
	//$scope.teacherList = localStorage.faculityList
	//$scope.teacherList = JSON.parse(sessionStorage.faculityList);
	$scope.teacherList = $rootScope.fmyList;
	$scope.perferenceList = ["Morning", "Afternoon", "Evening", "Night"];
	
	$scope.registerEdit = function(index){
			//dataService.editRecord($scope, index);
	};
	$scope.registerDelete = function(index){
		
		//alert($scope.teacherList.splice(index,1));
		$scope.number = index
		alert($scope.number);
		$scope.teacherList.splice(index,1)
	} ;
	$scope.registerSub = function() {
		
		$scope.teacherList[$scope.listNumber] = $scope.person ;	
				
		
	};
	$scope.addQualification = function(){
	$scope.person.qualification.push({"subject":""});
	
	};

});	