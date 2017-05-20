myApp.controller("mainController", function($scope, $rootScope, $location){

    $rootScope.welcome="welcome"; 
   



  $http({
    method: 'GET',
    url: 'json/menu.json'
  }).then(function successCallback(response) {
    $scope.menu = response.data.records;

  }, function errorCallback(response) {
    $scope.noDataFound = true;

  });


   

});