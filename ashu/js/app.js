angular.module("myapp",[]).controller("mycont", function($scope, $rootScope){

 $scope.ashu='Hello World!!';
 $rootScope.ashu2='Second row';
 $scope.mydivshow = true;
 $scope.editRec = false;
 $scope.indexUse = null;
 $scope.register = {
name : "",
email : "",
password : "",
message : "",
class:""
};
$scope.hi = [
	 {name:"anil", class:"12th A", email:"2",password:"",message:""},
	 {name:"Ashu", class:"11th A", email:"1",password:"",message:""},
	 {name:"Ravi", class:"7th A", email:"5",password:"",message:""},
	 {name:"Himanshu", class:"BA ", email:"45",password:"",message:""}
 ];
 $scope.regisetTeacher = function(){
	//console.log(($scope.register))
	if(!$scope.editRec){


	if($scope.register!=null && $scope.register.name!=null && $scope.register.class!=null && $scope.register.password!=null&& $scope.register.message!=null&& $scope.register.email!=null){

	
	$scope.hi.push(angular.copy($scope.register));
	$scope.register = {name : "",
	email : "",
	password : "",
	message : "",
	class:""};
	//success addtions for message 
	alert("SucessFully Added at Place- "+$scope.hi.length )

	}else{
		alert("Please fill all fields!")
	}
	}else{
	$scope.hi[$scope.indexUse]= angular.copy($scope.register);
	$scope.editRec = false;
	$scope.indexUse = null;

	$scope.register = {name : "",
	email : "",
	password : "",
	message : "",
	class:""};
}
}


$scope.removeTeacher= function(index){
$scope.hi.splice(index,1);
};
$scope.editTeacher = function(i){
$scope.register = angular.copy($scope.hi[i]);
$scope.indexUse =i;
$scope.editRec = true
};

 
})
