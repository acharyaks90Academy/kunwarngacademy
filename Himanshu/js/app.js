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
	console.log($scope.person)
	$scope.addList.push(angular.copy($scope.person));
	$scope.person ={};
	
}
$scope.myArray = [
{name:"Himanshu", email:'hw@gmail.com', qualification:'Graduate'},
{name:"Anil", email:'as@gmail.com', qualification:'BTech'},
{name:"Ashu", email:'at@gmail.com', qualification:'Graduate'},
];
})