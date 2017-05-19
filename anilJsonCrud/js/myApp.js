var myApp = angular.module("mainApp", []);

myApp.controller("mainController", function ($scope, $http, deleteItem) {



$scope.dataInsert = {
gender : "Male"
//language:"hindi"


};


  $scope.noDataFound = false;

  $scope.removeRow = function (index) {   
    // alert(index);
    // $scope.MyData.splice(index, 1);

    // console.log(index)
    deleteItem.rowDelete($scope, index);

  }





  $http({
    method: 'GET',
    url: 'json/jsonData.json'
  }).then(function successCallback(response) {
    $scope.MyData = response.data.records;

  }, function errorCallback(response) {
    $scope.noDataFound = true;

  });


  $scope.editRow = function (index) {
   console.log(JSON.stringify($scope.MyData[index]))    
    $scope.dataInsert = angular.copy($scope.MyData[index]);
   
  }




  

  $scope.addRow = function () {
   // console.log($scope.dataInsert);
    $scope.MyData.push({
      'firstName': $scope.dataInsert.firstName,
      'lastName': $scope.dataInsert.lastName,
      'firstName': $scope.dataInsert.firstName,
      'position': $scope.dataInsert.position,
      'email': $scope.dataInsert.email,
      'gender': $scope.dataInsert.gender,
      'appName': $scope.dataInsert.appName,
      'office': $scope.dataInsert.office,
      'language': $scope.dataInsert.language

    });

    $scope.dataInsert = {};
  }





})