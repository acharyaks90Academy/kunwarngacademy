myApp.controller("courseListCtrl", function($scope, $rootScope){

    $scope.bye="bye";

     //alert("Yay! " + $rootScope.welcome);

   $scope.requireMessage = false;

    $scope.hideButton = true;
   
    $scope.currentDegreeLevel= ["10th","12th","Graudate","Post Graduate"];  
    


 $scope.courseData = JSON.parse(localStorage.myCourseList);

 


$scope.newrecord = {};


$scope.copyRow = function(ndex){
$scope.courseData.push(angular.copy($scope.courseData[ndex]));
console.log(JSON.stringify($scope.courseData));
    


}








 
$scope.addCourse = function(copyIndex){   
    //$scope.courseData.push = angular.copy($scope.copyIndex, $scope.copyUser);  
    var total = $scope.courseData.length;  
    $scope.courseData.push(total + 1);
};



$scope.deleteCourse = function(deletecourse){
    //console.log(addCourse);  
    alert(deletecourse);
    $scope.courseData.splice(deletecourse,1);   
};


$scope.editCourse = function (editUser) {
    console.log(editUser)
    //console.log($scope.courseData[editUser])
    $scope.courseForm = angular.copy($scope.courseData[editUser]);
    //$scope.courseForm = $scope.courseData.indexOf(index);
    $scope.indexStop=editUser;
    $scope.editTruCondi=true;

}


$scope.openModal = function () {
                $modal.open({
				//controller: 'PopupCont',
                    templateUrl: "course/Pop.html"
                })
            }

            // $scope.closeModal = function () {
            //     $modalInstance.dismiss('cancel');
            // };

});