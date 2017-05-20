'use strict';

/**
 * @ngdoc overview
 * @name kunwarAcadApp
 * @description
 * # kunwarAcadApp
 *
 * Main module of the application.
 */
angular
  .module('kunwarAcadApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/studentReg', {
        templateUrl: 'views/studentreg.html',
        controller: 'StudentregCtrl',
        controllerAs: 'studentReg'
      })
      .when('/teacherReg', {
        templateUrl: 'views/teacherreg.html',
        controller: 'TeacherregCtrl',
        controllerAs: 'teacherReg'
      })
      .when('/teacherList', {
        templateUrl: 'views/teacherlist.html',
        controller: 'TeacherlistCtrl',
        controllerAs: 'teacherList'
      })
      .when('/studentList', {
        templateUrl: 'views/studentlist.html',
        controller: 'StudentlistCtrl',
        controllerAs: 'studentList'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/courseReg', {
        templateUrl: 'views/coursereg.html',
        controller: 'CourseregCtrl',
        controllerAs: 'courseReg'
      })
      .when('/courseList', {
        templateUrl: 'views/courselist.html',
        controller: 'CourselistCtrl',
        controllerAs: 'courseList'
      })
      .when('/syllabusList', {
        templateUrl: 'views/syllabuslist.html',
        controller: 'SyllabuslistCtrl',
        controllerAs: 'syllabusList'
      })
      .when('/syllabusReg', {
        templateUrl: 'views/syllabusreg.html',
        controller: 'SyllabusregCtrl',
        controllerAs: 'syllabusReg'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
