myApp.controller("mainController", function($scope, $http, $rootScope, $location){

    $rootScope.welcome="welcome"; 
   



  $http({
    method: 'GET',
    url: 'json/menu.json'
  }).then(function successCallback(response) {
    $scope.menu = response.data.mainMenu;

  }, function errorCallback(response) {
    $scope.noDataFound = true;

  });


   

});