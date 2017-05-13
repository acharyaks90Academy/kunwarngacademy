myApp.controller('syllabusListCtrl',function($scope, $rootScope, $http,url){

$scope.myList = [];

$http({
  method: 'GET',
  url: url.baseUrl + url.syl
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.myList = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert('hi')
  });

})

