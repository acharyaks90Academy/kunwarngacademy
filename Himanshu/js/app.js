angular.module('myApp',[]).controller('myCtrl', function($scope){
//alert();
$scope.person = {
	name:'',
	email:'',
	qualification:''

};
$scope.myDivShow = true;
$scope.editRec = false;

$scope.registerSub = function(){
	if($scope.editRec){
	//console.log($scope.person)
	
	$scope.addList[$scope.listnumber] = angular.copy($scope.person) ;
	$scope.editRec = false;
	$scope.person ={};
}else{
if($scope.person!=null && $scope.person.name!=null && $scope.person.email!=null && $scope.person.qualification!=null){
		
		$scope.addList.push(angular.copy($scope.person))
		$scope.person = {
			name:'',
			email:'',
			qualification:''
		};		

	}
	else{
	alert('Please fill the details')	
};	

}	
	
}
$scope.registerDelete = function(index){
	$scope.addList.splice(index,1)
}

$scope.registerEdit =  function(listnumber){
	
	$scope.person = angular.copy($scope.addList[listnumber]);
	alert(listnumber);
	$scope.editRec = true;
	$scope.listnumber = listnumber;

}

$scope.addList = [
{name:"Himanshu", email:'hw@gmail.com', qualification:'Graduate'},
{name:"Anil", email:'as@gmail.com', qualification:'BTech'},
{name:"Ashu", email:'at@gmail.com', qualification:'Graduate'},
];
})

