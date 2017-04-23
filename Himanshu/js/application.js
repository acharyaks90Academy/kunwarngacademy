var app = angular.module('myApp',["ngRoute"])
.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){

	$routeProvider
      .when('/list', {
        templateUrl: 'teacher/list.html'
       
      })
	   .when('/registration', {
        templateUrl: 'teacher/registration.html'
		
       
      })
      .when('/',{
      	templateUrl : 'welcome.html'
      })

}])
