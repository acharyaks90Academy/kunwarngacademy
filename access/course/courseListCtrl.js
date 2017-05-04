myApp.controller("courseListCtrl", function($scope, $rootScope){

    $scope.bye="bye";

     //alert("Yay! " + $rootScope.welcome);

   $scope.requireMessage = false;

    $scope.hideButton = true;
    $scope.courseData = JSON.parse(localStorage.myCourseList);
    

//  $scope.courseForm = {    
//     studentId : Math.ceil((Math.random() * 54125) + 1)
//     };
    
//     $scope.courseData=[
//      {"studentId":"" ,
// 	"firstName": "Rancho",
// 	"lastName": "Das",
// 	"phone": "9910736889",
// 	"email": "rancho.gk@gmail.com",
// 	"currentDegreeLevel": "Graudate",
// 	"dob": "01-01-1988",
// 	"gender": "Male",
//     "courseName": "PHP",
//     "courseDuration": "3",
//     "batchTiming": "Morning",   
//     "language": {"hindi":true,"english":false,"other":false}, 
//     "courseType": "Part Time",
//     "isWorking":"Yes" 
//      },
//     {"studentId":"",
// 	"firstName": "Pannu",
// 	"lastName": "jee",
// 	"phone": "1478552366",
// 	"email": "pannu.jee@gmail.com",
// 	"currentDegreeLevel": "12th",
// 	"dob": "01-01-1988",
// 	"gender": "Male",
//     "courseName": "dot net",
//     "courseDuration": "12",
//     "batchTiming": "Afternoon",    
//     "language": {"hindi":false,"english":true,"other":false},    
//     "courseType": "Full Time",
//     "isWorking":"No"
// }];



$scope.newrecord = {};


$scope.copyRow = function(anil){
    console.log($scope.courseData.push(anil))
    $scope.courseData($scope.courseForm);


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
    $scope.courseForm = $scope.courseData[editUser];
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