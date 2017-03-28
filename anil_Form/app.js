angular.module("myApp",[]).controller("mainCt", function($scope){

$scope.name1="Hi";

$scope.member={
name:"",
email:"",
roll:"",
address:""
};

$scope.myData=[];
$scope.successMessage=false;
$scope.alertMessage=true;

$scope.submitForm =function(){
	console.log($scope.myData);
	/*if($scope.member.name==""){
		alert("pleae fill it");

	};*/
	$scope.successMessage=true;
	$scope.alertMessage=false;
	//$scope.myData.push(angular.copy($scope.member));
	$scope.myData.push({'name':$scope.member.name, 'email':$scope.member.email, 'roll':$scope.member.roll, 'address':$scope.member.address});
	$scope.member={};
};

/*$scope.removeRow = function(){
	$scope.myData.pop();
	
};*/

})

