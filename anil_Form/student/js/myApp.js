var myApp= angular.module("studentApp",["ngRoute"])

.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "splash.html"
    })    
    .when("/student", {
        templateUrl : "studentPage.html"
    })
    .when("/login", {
        templateUrl : "loginPage.html",
        controller: 'loginController'
    });
})



myApp.controller("mySeat", function($scope, $timeout, $http){
	
	$scope.welcomeTime="hello...angular"
	
	$scope.usererror=false;
	$scope.passworderror=false;
	$scope.loginsuccess=false;
	$scope.recorddeletemessage=false;
	$scope.requiredField=false;
	$scope.editRec=false;


	$scope.dummyData=[
	{"photos":"images/anil.jpg","username":"Anil","password":"09652","class":"BBA","course":"ui/ux","duration":"6 Month","howfind":"Newspaper","fee":"10","gender":"Male"},
	{"photos":"images/himanshu.jpg","username":"Himanshu","password":"007","class":"BCA","course":"html/css","duration":"6 Month","howfind":"Google","fee":"20","gender":"Male"},
	{"photos":"images/ravi.jpg","username":"Bimla","password":"420","class":"B.TECH","course":"php","duration":"12 Month","howfind":"Google","fee":"50","gender":"Female"},
	{"photos":"images/bimla.jpg","username":"Ramesh","password":"156","class":"BCA","course":"html/css","duration":"6 Month","howfind":"Google","fee":"20","gender":"Male"},
	{"photos":"images/kishan.jpg","username":"Kishan","password":"420","class":"B.TECH","course":"dot Net","duration":"1 Month","howfind":"Others","fee":"50","gender":"Female"},
	{"photos":"images/chameli.jpg","username":"Chameli","password":"143","class":"BA","course":"seo","duration":"3 Month","howfind":"Newspaper","fee":"50","gender":"Female"}
	];

	$scope.studentForm={
		photos:"",
		username:"",
		class:"",
		duration:"",
		password:"",
		course:"",
		gender:"",
		fee:"",
		placementNewspaper:"",
		placementGoogle:"",
		placementOther:""
		


	};
	
	$scope.login={		
		username:"",
		password:""
	}
	
	
	
	

	$scope.SubmitData = function(){
		if($scope.studentForm==null || $scope.studentForm=="" || $scope.studentForm.username==null || $scope.studentForm.username==""
			 || $scope.studentForm.class==null || $scope.studentForm.class=="" || $scope.studentForm.duration==null || $scope.studentForm.duration==""
			 || $scope.studentForm.course==null || $scope.studentForm.course=="" || $scope.studentForm.password==null || $scope.studentForm.password=="" 
			 || $scope.studentForm.fee==null || $scope.studentForm.fee==""){
			alert("please enter all details");
			$scope.requiredField=true;
			//return false;


		}else if(isNaN($scope.studentForm.fee)){
			alert("fee should numeric");
			//return false;

		}else if($scope.studentForm.fee.length>2){
			alert("2 digit only");
			//return false;

		}else{
			$scope.dummyData.push({
				'photos':$scope.studentForm.photos,	'username':$scope.studentForm.username,
				'password':$scope.studentForm.password,
				'class':$scope.studentForm.class,
				'course':$scope.studentForm.course,
				'duration':$scope.studentForm.duration,
				'fee':$scope.studentForm.fee,
				'gender':$scope.studentForm.gender,
				'howfind':{"placementNewspaper":$scope.studentForm.placementNewspaper,"placementGoogle":$scope.studentForm.placementGoogle,
				"placementOther":$scope.studentForm.placementOther}				
				});
				$scope.studentForm={};

		}



	}


	$scope.deleteRecord = function(deleterow){
		$scope.dummyData.splice(deleterow, 1);
		$scope.recorddeletemessage=true;

		$timeout (function(){
			$scope.recorddeletemessage=false;
		},1000);
	}

	$scope.editRecord = function(index){
		alert(index);
		//console.log($scope.studentForm = ($scope.dummyData[index]))
		$scope.studentForm = ($scope.dummyData[index]);		
		$scope.indedHold=index;
		$scope.editRec=true;



	}
	
	
})