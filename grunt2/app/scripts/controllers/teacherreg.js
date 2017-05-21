'use strict';

/**
 * @ngdoc function
 * @name kunwarAcadApp.controller:TeacherregCtrl
 * @description
 * # TeacherregCtrl
 * Controller of the kunwarAcadApp
 */
angular.module('kunwarAcadApp')
  .controller('TeacherregCtrl', function ($scope, $rootScope, $location, $log, $interval, $timeout, dataService,local) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



	//decalring variabls
$scope.welcome="hello world!!";


$timeout(function(){
$scope.welcome="change by timeout!!!";

},2000)



	$scope.myVarA = 1;

	$scope.intr = $interval(function(){
		$scope.myVarA += 1;  

	},1000);
	
	$scope.teacherList = [
	{userphoto:"images/himanshu.jpg", name:"Himanshu", email:"hw@gmail.com",  preference:["Morning", "Afternoon"],  visit:"Weekdays", role:"Temperory", timeslot:{morning:true, afternoon:true, evening:false},  qualification:[{subject:"Angular, Javascript"}]},
	{userphoto:"images/ravi.jpg", name:"Ravi", email:"rs@gmail.com", preference:["Evening", "Night"],  visit:"Weekdays", role:"Permanent", timeslot:{morning:false, afternoon:true, evening:false}, qualification:[{subject:"SASS, Javascript"}]},
	{userphoto:"images/anil.jpg", name:"Anil", email:"ashutyagi@gmail.com", preference:["Evening", "Night"],  visit:"Weekends", role:"Temperory", timeslot:{morning:false, afternoon:false, evening:true}, qualification:[{subject:"Jquery, Javascript"}]}

	];

	$rootScope.fmyList = $scope.teacherList;
	
    $rootScope.teachers = $scope.teacherList;
	$scope.perferenceList = local.giveperferences();
	$scope.person = {
		userphoto:"",
		name:"",
		email:"",
		preference:"",
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
		 	  	console.log("The inserted objct"+JSON.stringify($scope.person));
				   $log.warn("$ log The inserted objct"+JSON.stringify($scope.person));
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
	$timeout(function(){
		$interval.cancel($scope.intr);
		//clearInterval($scope.intr);
	},10000)
	var d = 1;
	console.log(dataService.getData(d));

	$scope.getSum = function(a){
		return local.someMethod(a);
	};
})	
