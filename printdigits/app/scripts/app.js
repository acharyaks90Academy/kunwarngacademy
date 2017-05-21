'use strict';

/**
 * @ngdoc overview
 * @name printdigtsApp
 * @description
 * # printdigtsApp
 *
 * Main module of the application.
 */
angular
  .module('printdigtsApp', [
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
      .when('/productDetails', {
        templateUrl: 'views/productdetails.html',
        controller: 'ProductdetailsCtrl',
        controllerAs: 'productDetails'
      })
      .when('/common', {
        templateUrl: 'views/common.html',
        controller: 'CommonCtrl',
        controllerAs: 'common'
      })
      .when('/sidenav', {
        templateUrl: 'views/sidenav.html',
        controller: 'SidenavCtrl',
        controllerAs: 'sidenav'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
