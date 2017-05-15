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
      .otherwise({
        redirectTo: '/'
      });
  });
