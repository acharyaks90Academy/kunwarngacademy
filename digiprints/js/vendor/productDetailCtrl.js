myApp.controller('productDetailCtrl', function ($scope, $http){
  
	$scope.productDetail = [];
    $scope.productTable = [];

    $scope.data = function(){

	  $http({
	    method: 'GET',
	    url: 'json/sideNav.json'
	   
	  }).then(function successCallback(response) {
	    $scope.productDetail = response.data.sideNavMenu;
	    $scope.productTable = response.data.productTableData;

	  }, function errorCallback(response) {
	        alert("Data Not Find");
	  });
    }

    $scope.data();

    
});