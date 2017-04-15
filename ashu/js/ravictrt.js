angular.module("myapp").controller("raviCtl", function($scope){

	$scope.ashu='Hello World!!Ravi';
	$scope.obj={
		myName:""
	}
	$scope.print = function(){
		console.log($scope.obj.myName);
	};
 	
})