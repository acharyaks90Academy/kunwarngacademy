app.controller('registrationCtrl', function($scope){
$scope.person = {
		name:"",
		email:"",
		qualification:[{
			subject:"",
		}],

};
$scope.qualification = "";
$scope.editRec = false;
$scope.registerSub = function() {
if($scope.editRec){
			$scope.teacherList[$scope.listNumber] = angular.copy($scope.person);			
			alert($scope.editRec)
			$scope.listNumber = null;
			$scope.editRec = false;
			$scope.person ={
				name:"",
				email:"",
				qualification:"",
			};

}
else{
if($scope.person!=null && $scope.person.name!=null && $scope.person.name!='' && $scope.person.name!=null && $scope.person.qualification!=null){
		 	    alert("Data Filled")
				alert($scope.person.name);
				$scope.teacherList.push(angular.copy($scope.person))
				$scope.person = {
					name:"",
					email:"",
					qualification:"",

				};
}
			else{
				alert('Please fill the details');
			}	

}
}
$scope.editfun = function(index){
			$scope.person = angular.copy($scope.teacherList[index]) 
			$scope.editRec = true
			$scope.listNumber = index
			alert($scope.listNumber)

	}
	$scope.deletefun = function(index){
		
		//alert($scope.teacherList.splice(index,1));
		$scope.number = index
		alert($scope.number);
		$scope.teacherList.splice(index,1)
	} 

	$scope.teacherList = [
	{name:"Himanshu", email:"hw@gmail.com", qualification:[{subject:"Angular, Javascript"}]},
	{name:"Ravi", email:"rs@gmail.com", qualification:[{subject:"SASS, Javascript"}]},
	{name:"Ashu", email:"ashutyagi@gmail.com", qualification:[{subject:"Jquery, Javascript"}]}

	];

})	