'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('SidenavCtrl', function ($http,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
    method: 'GET',
    url: 'json/sideNav.json'
  }).then(function successCallback(response) {
    $scope.productDetail = response.data.sideNavMenu;

  }, function errorCallback(response) {
        alert("Data Not Find");
  });
  });

