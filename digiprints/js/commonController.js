myApp.controller("commonController", function($scope, $http, $rootScope, $location){


  
  $http({
    method: 'GET',
    url: 'json/menu.json'
  }).then(function successCallback(response) {
    $scope.menu = response.data.mainMenu;

  }, function errorCallback(response) {
    $scope.noDataFound = true;

  });

   

   var d = new Date();
    var n = d.getFullYear();
   
        $scope.dateTme = n;


  // $http({
  //   method: 'GET',
  //   url: 'json/menu.json'
  // }).then(function successCallback(response) {
  //   $scope.menu = response.data.records;

  // }, function errorCallback(response) {
  //   $scope.noDataFound = true;

  // });


   

});