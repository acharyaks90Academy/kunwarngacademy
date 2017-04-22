var myApp= angular.module("academyApp",["ngRoute"]) //

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
    .when("/login", {
        templateUrl : "loginPage.html",
        controller: 'loginController'
    });
})



