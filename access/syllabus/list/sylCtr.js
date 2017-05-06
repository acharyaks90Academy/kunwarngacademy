myApp.controller('syllabusListCtrl',function($scope, $rootScope, $http){

$scope.myList = [];

$http({
  method: 'GET',
  url: 'syllabus/list/myList.json212'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.myList = response;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert('hi')
  });

})

