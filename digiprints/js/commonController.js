myApp.controller("commonController", function($scope, $rootScope, $location){


   var d = new Date();
    var n = d.getFullYear();
   // var t = d.getDay();
$scope.dateTme = n;


    $scope.footer="footer"; 
   



  // $http({
  //   method: 'GET',
  //   url: 'json/menu.json'
  // }).then(function successCallback(response) {
  //   $scope.menu = response.data.records;

  // }, function errorCallback(response) {
  //   $scope.noDataFound = true;

  // });


   

});