myApp.controller('registrationCtrl', function($scope, $rootScope, $location){

	$scope.teacherList = [
	{userphoto:"images/himanshu.jpg", name:"Himanshu", email:"hw@gmail.com", preference:["Morning", "Night"], visit:"Weekdays", role:"Temperory", timeslot:"09:00 A.M. - 12:00 P.M.",  qualification:[{subject:"Angular, Javascript"}]},
	{userphoto:"images/ravi.jpg", name:"Ravi", email:"rs@gmail.com", preference:["Morning", "Afternoon"], visit:"Weekdays", role:"Permanent", timeslot:"06:00 P.M. - 09:00 P.M.", qualification:[{subject:"SASS, Javascript"}]},
	{userphoto:"images/anil.jpg", name:"Anil", email:"ashutyagi@gmail.com", preference:["Evening", "Night"], visit:"Weekends", role:"Temperory", timeslot:"09:00 A.M. - 12:00 P.M.", qualification:[{subject:"Jquery, Javascript"}]}

	];

	//initialize the array for teacher
	$rootScope.teachers = $scope.teacherList;
	$scope.person = {
		userphoto:"",
		name:"",
		email:"",
		preference:[],
		visit:"",
		role:"",
		timeslot:"",
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
			

}
else{
if($scope.person!=null && $scope.person.userphoto!=null && $scope.person.name!=null && $scope.person.name!='' && $scope.person.name!=null && $scope.person.email!=null && $scope.person.preference!=null && $scope.person.visit!=null && $scope.person.role!=null && $scope.person.timeslot!=null && $scope.person.qualification!=null){
		 	  	$scope.teacherList.push(angular.copy($scope.person))
				$scope.person = {
					userphoto:"",
					name:"",
					email:"",
					preference:[],
					visit:"",
					role:"",
					timeslot:"",
					qualification:[{
						subject:"",
				}],

				}
				$rootScope.teachers = $scope.teacherList;
				$location.path("/teacherlist");
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
$scope.addQualification = function(){
	$scope.person.qualification.push({"subject":""});
	//$scope.qualification = "";
}
	

})	