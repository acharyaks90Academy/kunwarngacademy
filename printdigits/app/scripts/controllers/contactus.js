'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:ContactusCtrl
 * @description
 * # ContactusCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('ContactusCtrl', function ($scope, $location, $rootScope ) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.submit =false;
  //$rootScope.showHeader = true;


$scope.contactForm = function () {
$scope.submit =true;
if($scope.submit == true){

  
}

}




  });
