myApp.controller('sideNavCtrl', function ($scope, $http){
  $http({
    method: 'GET',
    url: 'json/sideNav.json'
  }).then(function successCallback(response) {
    $scope.productDetail = response.data.sideNavMenu;

  }, function errorCallback(response) {
        alert("Data Not Find");
  });
});