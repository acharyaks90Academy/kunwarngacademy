var myApp = angular.module("exampleApp", []);


myApp.controller("mainController", function($scope, $timeout, $http){

$scope.welcome = "haiyya!!!"


//$scope.myJsonData = [];


$http({
  method: 'GET',
  url: 'myJson.json'
}).then(function successCallback(response) {
  
  $scope.myJsonData= response.data.records;

  }, function errorCallback(response) {
      alert("404 PAGE");
   
  });




})