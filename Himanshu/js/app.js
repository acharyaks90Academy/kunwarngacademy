angular.module('myApp',[]).controller('myCtrl', function($scope){
//alert();
$scope.qualification = "";

//$scope.addList =

//$scope.myNewList = $scope.addList[];


$scope.person = {
	name:'',
	email:'',
	qualification:[{
		subject : " 	 	"
	}]

};
$scope.myDivShow = true;
$scope.editRec = false;

$scope.addQualification = function(){
	$scope.person.qualification.push({"subject":""});
	//$scope.qualification = "";
}

$scope.registerSub = function(){
	if($scope.editRec){
	//console.log($scope.person)
	
	$scope.addList[$scope.listnumber] = angular.copy($scope.person) ;
	$scope.editRec = false;
	$scope.person = {
	name:'',
	email:'',
	qualification:[]

};
	
}else{
if($scope.person!=null && $scope.person.name!="" && $scope.person.email!="" && $scope.person.qualification!=""){
		
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
	$scope.editRec = true; //we will update same record 
	$scope.listnumber = listnumber;

}

$scope.addList = [
{name:"Himanshu", email:'hw@gmail.com', qualification:'Graduate'},
{name:"Anil", email:'as@gmail.com', qualification:'BTech'},
{name:"Ashu", email:'at@gmail.com', qualification:'Graduate'},
];

// for (x=0; x<$scope.addList.length; x++){
	
// 	console.log(x);
// 	console.log($scope.addList[x].name)
// }

$scope.myNewList = [];

var mineArr = [];
for (var x=0; x<$scope.addList.length; x++){
	mineArr.push({
		"name": $scope.addList[x].name,
		 "email": $scope.addList[x].email
});
}

console.log(mineArr);




})

