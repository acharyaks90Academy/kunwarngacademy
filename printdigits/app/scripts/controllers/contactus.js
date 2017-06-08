'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:ContactusCtrl
 * @description
 * # ContactusCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('ContactusCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.submit =false;


$scope.contactForm = function () {
$scope.submit =true;
if($scope.submit == true){

  
}

}




  });
