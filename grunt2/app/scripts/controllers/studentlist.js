'use strict';

/**
 * @ngdoc function
 * @name kunwarAcadApp.controller:StudentlistCtrl
 * @description
 * # StudentlistCtrl
 * Controller of the kunwarAcadApp
 */
angular.module('kunwarAcadApp')
  .controller('StudentlistCtrl', function ($scope, $timeout, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


	
	$scope.recorddeletemessage=false;

	$scope.editRec=false;


	$scope.dummyData= JSON.parse(localStorage.myList);
    //[
	// {"photos":"images/anil.jpg","username":"Anil","password":"09652","class":"BBA","course":"ui/ux","duration":"6 Month","howfind":"Newspaper","fee":"10","gender":"Male"},
	// {"photos":"images/himanshu.jpg","username":"Himanshu","password":"007","class":"BCA","course":"html/css","duration":"6 Month","howfind":"Google","fee":"20","gender":"Male"},
	// {"photos":"images/ravi.jpg","username":"Bimla","password":"420","class":"B.TECH","course":"php","duration":"12 Month","howfind":"Google","fee":"50","gender":"Female"},
	// {"photos":"images/bimla.jpg","username":"Ramesh","password":"156","class":"BCA","course":"html/css","duration":"6 Month","howfind":"Google","fee":"20","gender":"Male"},
	// {"photos":"images/kishan.jpg","username":"Kishan","password":"420","class":"B.TECH","course":"dot Net","duration":"1 Month","howfind":"Others","fee":"50","gender":"Female"},
	// {"photos":"images/chameli.jpg","username":"Chameli","password":"143","class":"BA","course":"seo","duration":"3 Month","howfind":"Newspaper","fee":"50","gender":"Female"}
	// ];


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
	
	
});