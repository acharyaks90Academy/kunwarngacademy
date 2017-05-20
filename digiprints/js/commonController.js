myApp.controller("commonController", function($scope, $rootScope, $location){


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