
var myapp =angular.module("myApp", []);

myapp.controller("myctrl", ['$scope', function($scope){
	$scope.myList = [];

	$scope.addInList=function(obj){
		$scope.myList.push(angular.copy(obj));
		obj = {};
	}
}]);



myapp.contoroller("myctrl", [$scope, function($scope){
      $scope.mylist=[];

      $scope.addInList=function(obj){

      	$scope.myList.push(obj);
      }






}])