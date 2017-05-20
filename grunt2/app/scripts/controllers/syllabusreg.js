'use strict';

/**
 * @ngdoc function
 * @name kunwarAcadApp.controller:SyllabusregCtrl
 * @description
 * # SyllabusregCtrl
 * Controller of the kunwarAcadApp
 */
angular.module('kunwarAcadApp')
  .controller('SyllabusregCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.syllabus = {
    uniqueId:'',
    subject:["Javascript", "Angular", "HTML", "CSS", "Jquery", "SASS", "NodeJS", "ReactJS"],
    startDate:'',
    duration:["3 Months", "6 Months", "1 year", "2 year"],
    category:["Basic", "Intermediate", "Advanced"],
    faculity:'',
    fee:'',
    topic:''
};
  });
