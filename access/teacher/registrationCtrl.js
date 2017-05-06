myApp.controller('registrationCtrl', function($scope, $rootScope, $location){



	
	$scope.teacherList = [
	{userphoto:"images/himanshu.jpg", name:"Himanshu", email:"hw@gmail.com",  preference:["Morning", "Afternoon"],  visit:"Weekdays", role:"Temperory", timeslot:{morning:true, afternoon:true, evening:false},  qualification:[{subject:"Angular, Javascript"}]},
	{userphoto:"images/ravi.jpg", name:"Ravi", email:"rs@gmail.com", preference:["Evening", "Night"],  visit:"Weekdays", role:"Permanent", timeslot:{morning:false, afternoon:true, evening:false}, qualification:[{subject:"SASS, Javascript"}]},
	{userphoto:"images/anil.jpg", name:"Anil", email:"ashutyagi@gmail.com", preference:["Evening", "Night"],  visit:"Weekends", role:"Temperory", timeslot:{morning:false, afternoon:false, evening:true}, qualification:[{subject:"Jquery, Javascript"}]}

	];

	$rootScope.fmyList = $scope.teacherList;
	//localStorage.faculityList =  JSON.stringify($scope.teacherList)
	//sessionStorage.faculityList =  JSON.stringify($scope.teacherList);

	//initialize the array for teacher
	//$rootScope.teachers = $scope.teacherList;
	
	$scope.person = {
		userphoto:"",
		name:"",
		email:"",
		preference:["Morning", "Afternoon", "Evening", "Night"],
		visit:"",
		role:"Permanent",
		timeslot:{morning:"", afternoon:"", evening:""},
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
if($scope.person!=null && $scope.person.userphoto!=null && $scope.person.name!=null && $scope.person.email!=null && $scope.person.preference!=null && $scope.person.visit!=null && $scope.person.role!=null && $scope.person.timeslot!=null && $scope.person.qualification!=null){
		 	  	$scope.teacherList.push(angular.copy($scope.person))
				$scope.person = {
					userphoto:"",
					name:"",
					email:"",
					preference:["Morning", "Afternoon", "Evening", "Night"],
					visit:"",
					role:"Permanent",
					timeslot:{morning:"", afternoon:"", evening:""},
					qualification:[{
						subject:"",
				}],

			}
			$rootScope.fmyList = $scope.teacherList;
			//$location.path("/teacherList")


			//$scope.teacherList =  JSON.parse(localStorage.facuiltyList);
			//localStorage.faculityList = JSON.stringify($scope.teacherList);
			//sessionStorage.faculityList = JSON.stringify($scope.teacherList);
				
			//$scope.teacherList ={};
				//$rootScope.teachers = $scope.teacherList;
				//$location.path("/teacherlist");
}
			else{
				alert('Please fill the details');
			}

}
}

	
$scope.addQualification = function(){
	$scope.person.qualification.push({"subject":""});
	//$scope.qualification = "";
}
	

})	