myApp.controller("courseCtrl", function($scope, $rootScope, $location){

    $rootScope.welcome="welcome"; 
    $scope.requireMessage = false;

    $scope.currentDegreeLevel= ["10th","12th","Graudate","Post Graduate"];
    $scope.courseType= ["Full Time","Part Time"];
    $scope.studentdisabled = true;
   
    $scope.editSection = false;
    

    $scope.courseForm = {    
    studentId : Math.ceil((Math.random() * 54125) + 1)
    //gender : male;
};


    
    localStorage.myCourseList = JSON.stringify($scope.courseData);

    $scope.courseData=[
     {"studentId":"541252" ,
	"firstName": "Rancho",
	"lastName": "Das",
	"phone": "9910736889",
	"email": "rancho.gk@gmail.com",
	"currentDegreeLevel": "Graudate",
	"dob": "01-01-1988",
	"gender": "Male",
    "courseName": "PHP",
    "courseDuration": "3",
    "batchTiming": "Morning",   
    "language": {"hindi":true,"english":false,"other":false}, 
    "courseType": "Part Time",
    "isWorking":"Yes" 
     },
    {"studentId":"541253",
	"firstName": "Pannu",
	"lastName": "jee",
	"phone": "1478552366",
	"email": "pannu.jee@gmail.com",
	"currentDegreeLevel": "12th",
	"dob": "01-01-1988",
	"gender": "Male",
    "courseName": "dot net",
    "courseDuration": "12",
    "batchTiming": "Afternoon",    
    "language": {"hindi":false,"english":true,"other":false},    
    "courseType": "Full Time",
    "isWorking":"No"
       
   
}];











$scope.SubmitData = function () {
//console.log($location.path("/courseList"))  
 console.log($scope.courseForm); 
    if(!$scope.editSection){

    if($scope.courseForm == null || 
$scope.courseForm.studentId == null || $scope.courseForm.studentId =="" || $scope.courseForm.studentId ==" " ||
$scope.courseForm.firstName == null || $scope.courseForm.firstName =="" || $scope.courseForm.firstName ==" "  ||
$scope.courseForm.gender == null || $scope.courseForm.gender =="" || $scope.courseForm.gender ==" "  ||
$scope.courseForm.lastName == null || $scope.courseForm.lastName =="" || $scope.courseForm.lastName ==" "  ||
$scope.courseForm.courseName == null || $scope.courseForm.courseName =="" || $scope.courseForm.courseName ==" "  ||
$scope.courseForm.courseDuration == null || $scope.courseForm.courseDuration =="" || $scope.courseForm.courseDuration ==" "  ||
$scope.courseForm.batchTiming == null || $scope.courseForm.batchTiming =="" || $scope.courseForm.batchTiming ==" " ){

// alert("Please fill the ID, firstname, lastname, gender, coursename, courseduration, batchtiming");
$scope.requireMessage = true;

}else if($scope.courseForm.studentId.length<5 || isNaN($scope.courseForm.studentId)){
alert("Please enter 5 digit in Numeric value ")
}
else {
    console.log($scope.courseForm);  
     
    $scope.courseData.push({        
       'studentId': $scope.courseForm.studentId,
       'phone': $scope.courseForm.phone,
       'dob': $scope.courseForm.dob,
       'firstName': $scope.courseForm.firstName,
       'email': $scope.courseForm.email,
       'gender': $scope.courseForm.gender,
       'lastName': $scope.courseForm.lastName,
       'currentDegreeLevel': $scope.courseForm.currentDegreeLevel,
       'courseName': $scope.courseForm.courseName,
       'courseDuration': $scope.courseForm.courseDuration,
       'batchTiming': $scope.courseForm.batchTiming, 
       'language': {'hindi': $scope.courseForm.hindi, 'english' : $scope.courseForm.english, 'other' : $scope.courseForm.other},
       'courseType': $scope.courseForm.courseType,     
       'isWorking': $scope.courseForm.isWorking   
    });
       
    $scope.courseForm="";    
    $location.path("/courseList")
    localStorage.myCourseList = JSON.stringify($scope.courseData);
   

}
}else{

$scope.courseForm[$scope.editUser] = $scope.courseForm;
$scope.editSection = false;

}



}





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