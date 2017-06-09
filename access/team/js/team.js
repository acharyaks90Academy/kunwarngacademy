var app=angular.module("teamApp", []);
app.controller("firstController", function($scope,$http,$timeout, $interval){

		
		$scope.noJson = false;
		$scope.deleteMessage = false;

			$http({
		  method: 'GET',
		  url: 'team.json'
		}).then(function successCallback(response) {		  	
		  	$scope.myTeamJson = response.data.records;

		  }, function errorCallback(response) {
			$scope.noJson = true;
		   
		  });


			 $scope.city = ["Choujiang", "Los Mangos", "Sigiriya","Ganlin"];



		

		$scope.team = {
		gender : "Male",
		certificateNumber: Math.floor(Math.random()*519) + 1
		};

		

		$scope.editRecord =false;


	$scope.deleteData = function (index){	
	console.log(index);	
	$scope.myTeamJson.splice(index,1);
	$scope.deleteMessage = true;

	$timeout (function(){
	$scope.deleteMessage = "";
	},1500)
		};

	

	$scope.pushData= function(){

		if(!$scope.editRecord){
			if($scope.team.firstName == null || $scope.team.firstName == "" || $scope.team.lastName == null || $scope.team.lastName == ""
		|| $scope.team.gender == null || $scope.team.gender == "" || $scope.team.city == null || $scope.team.city == "" ){
			alert("haiyya... Firstname, LastName, Gender, City!!!");
		}else{
		$scope.myTeamJson.push({
		'firstName':$scope.team.firstName,
		'lastName':$scope.team.lastName,
		'email':$scope.team.email,
		'certificateNumber':$scope.team.certificateNumber,
		'gender':$scope.team.gender,
		'city':$scope.team.city
		})
		$scope.team={
			gender : "Male",
			certificateNumber: Math.floor(Math.random()*519) + 1
		};	

		}
		}else {
			$scope.myTeamJson[$scope.index] = $scope.team;
			$scope.editRecord = false;


		}

		

	};


$scope.editData = function(index){
		//console.log($scope.myTeamJson[index]);
		$scope.team= $scope.myTeamJson[index];
		$scope.indexHold = index;
		$scope.editRecord =true;
	}

})