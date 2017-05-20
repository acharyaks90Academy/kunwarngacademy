var myApp = angular.module("mainApp", ["ngRoute"])




.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "mainPage.html",
        controller: "mainController"
    })    
    .when("/productDetails", {
        templateUrl : "student/reg/studentPage.html"
		
    })
	 
      
})



