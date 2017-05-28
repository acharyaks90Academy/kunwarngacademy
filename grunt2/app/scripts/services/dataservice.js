'use strict';

/**
 * @ngdoc service
 * @name kunwarAcadApp.dataService
 * @description
 * # dataService
 * Service in the kunwarAcadApp.
 */
angular.module('kunwarAcadApp')
  .service('dataService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getData = function (a) {
      return a + 1;
    };
    this.editRecord = function ($scope, index) {

      if ($scope.teacherList) {
        $scope.person = angular.copy($scope.list[index]);
        $scope.editRec = true;
        $scope.listNumber = index;
      } else {
        $scope.courseForm = angular.copy($scope.courseData[index]);

        $scope.indexStop = index;
        $scope.editTruCondi = true;
      }
    };
  });
