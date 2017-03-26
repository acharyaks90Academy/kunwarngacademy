angular.module("myapp",[]).controller("mycont", function($scope, $rootScope){

 $scope.ashu='Hello World!!';
 $rootScope.ashu2='Second row';
 $scope.mydivshow = true;
 $scope.register = {
name : "",
email : "",
password : "",
message : ""
};
$scope.hi = [];
 $scope.regisetTeacher = function(){
	console.log(($scope.register))
	$scope.hi.push(angular.copy($scope.register));
	$scope.register = {};

}





 $scope.myarra = [
 {name:"anil", class:"12th A", rollno:"2"},
 {name:"Ashu", class:"11th A", rollno:"1"},
 {name:"Ravi", class:"7th A", rollno:"5"},
 {name:"Himanshu", class:"BA ", rollno:"45"}

 ]
})
