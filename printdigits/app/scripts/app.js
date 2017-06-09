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
      .when('/productdetails', {
        templateUrl: 'views/productdetails.html',
        controller: 'ProductdetailsCtrl',
        controllerAs: 'productdetails'
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
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl',
        controllerAs: 'contactus'
      })
      .when('/adminmain', {
        templateUrl: 'views/adminmain.html',
        controller: 'AdminmainCtrl',
        controllerAs: 'adminmain'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
