myApp.controller('teacherLisCtrl', function($scope,$rootScope){
	//$scope.teacherList = $rootScope.teachers;
	//$scope.teacherList = localStorage.faculityList
	//$scope.teacherList = JSON.parse(sessionStorage.faculityList);
	$scope.teacherList = $rootScope.fmyList;

	
	$scope.registerEdit = function(index){
			$scope.person = angular.copy($scope.teacherList[index]) 
			$scope.editRec = true
			$scope.listNumber = index
			alert($scope.listNumber)

	}
	$scope.registerDelete = function(index){
		
		//alert($scope.teacherList.splice(index,1));
		$scope.number = index
		alert($scope.number);
		$scope.teacherList.splice(index,1)
	} 
	$scope.registerSub = function() {
		alert($scope.listNumber);
		$scope.teacherList[$scope.listNumber] = $scope.person ;	
				
		
	}
	$scope.addQualification = function(){
	$scope.person.qualification.push({"subject":""});
	//$scope.qualification = "";
}

})	