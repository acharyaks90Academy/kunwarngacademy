var myApp= angular.module("academyApp",["ngRoute", "ui.bootstrap"]) //

.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "splash.html"
    })    
    .when("/student", {
        templateUrl : "student/reg/studentPage.html",
		
    })
	 .when("/studentList", {
        templateUrl : "student/studentList.html",
		
    })
    .when("/teacherlist", {
        templateUrl: "teacher/list.html",
       
      })
	   .when("/registration", {
        templateUrl: "teacher/registration.html"
		
      })
      .when("/syllabus", {
        templateUrl: "syllabus/syllabus-detail.html",
        controller: "syllabusCtrl"
         
       
      })

      .when("/course", {
        templateUrl: "course/course.html",
        controller: "courseCtrl"
       
      })
      .when("/courseList", {
        templateUrl: "course/courseList.html",
        controller: "courseListCtrl"        
       
      })


    .when("/login", {
        templateUrl : "loginPage.html",
        controller: 'loginController'
    })
    .when("/sylList", {
        templateUrl : "syllabus/list/sylview.html"
    });
})



