'use strict';

/**
 * @ngdoc service
 * @name printdigtsApp.homePage
 * @description
 * # homePage
 * Factory in the printdigtsApp.
 */
angular.module('printdigtsApp')
  .factory('homePage', function ($http) {
    // Service logic
    // ...

    // var meaningOfLife = 42;

    // Public API here
    return {
      getData: function ($scope) {
        var data = "";
        $http({
          method: 'GET',
          url: 'json/demoData.json'
        }).then(function successCallback(response) {
          $scope.menu = response.data.mainMenu;
          $scope.listPro = response.data.productList;
          // $scope.footerLink = response.data.footerMenu
        }, function errorCallback(response) {
          $scope.noDataFound = true;

        });
        return data;
      },


   footerData : function ($scope) {
      
    //  var anil =   4;
      $http({
          method: "GET",
          url: 'json/demoData.json'
        }).then(function successCallback(response) {
          $scope.footerLink = response.data.footerMenu

        }, function errorCallback(response) {
          $scope.noDataFound = true;

        });

       // return anil;


      },



      totalCode : function (a, b){
        return a*b ;

      }








    }

    });
