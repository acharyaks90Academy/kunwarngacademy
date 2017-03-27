angular.module('myApp',[]).controller('myCtrl', function($scope){
//alert();
$scope.person = {
	name:'',
	email:'',
	qualification:''

};
$scope.myDivShow = true;

$scope.addList = [];

$scope.registerSub = function(){
	//console.log($scope.person)
	if($scope.person.name=="" || $scope.person.email=="" || $scope.person.qualification==""){
		alert("please fill it");		

	}
	else{$scope.addList.push({ 'name':$scope.person.name, 'email': $scope.person.email, 'qualification':$scope.person.qualification })
	$scope.person={};
};	
	
	
}


$scope.myArray = [
{name:"Himanshu", email:'hw@gmail.com', qualification:'Graduate'},
{name:"Anil", email:'as@gmail.com', qualification:'BTech'},
{name:"Ashu", email:'at@gmail.com', qualification:'Graduate'},
];
})