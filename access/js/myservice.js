myApp.service('dataServic', function(){
    // var myserv = {}

    this.getData = function(a){
        return a+1; 
    }
    this.editRecord = function($scope,index){
    
    if($scope.teacherList){
         $scope.person = angular.copy($scope.teacherList[index]) 
			$scope.editRec = true
			$scope.listNumber = index
    }else{
    $scope.courseForm = angular.copy($scope.courseData[index]);
    //$scope.courseForm = $scope.courseData.indexOf(index);
    $scope.indexStop=index;
    $scope.editTruCondi=true;
    }

    //  mainObject = angular.copy(list[index]) 
	// 		flag = true
	// 		scopeListIndex = index  list,mainObject, index,flag, scopeListIndex
        
   

    }
    
    this.someMethod = function (sum) {
        
        return sum+1;
      }

   
    // return myserv
})



  myApp.factory('localDataServ', localDataServ);


  function localDataServ() {
    var someValue = 42;
    var service = {
        save: save,
        validate: validate
    };
    return service;

    ////////////

    function save(a) {

        return someValue+a;
        /* */
    };

    function validate() {
        /* */
    };
}