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
        controllerAs: 'main',
        showHeader : true
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        showHeader : true
      })
      .when('/productdetails', {
        templateUrl: 'views/productdetails.html',
        controller: 'ProductdetailsCtrl',
        controllerAs: 'productdetails',
         showHeader : true
      })
      .when('/common', {
        templateUrl: 'views/common.html',
        controller: 'CommonCtrl',
        controllerAs: 'common',
         showHeader : true
      })
      .when('/sidenav', {
        templateUrl: 'views/sidenav.html',
        controller: 'SidenavCtrl',
        controllerAs: 'sidenav'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl',
        controllerAs: 'contactus',
         showHeader : true
      })
      .when('/adminmain', {
        templateUrl: 'views/adminmain.html',
        controller: 'AdminmainCtrl',
        controllerAs: 'adminmain',
        showHeader : false
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  run(['$rootScope', function($rootScope) {
    $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
       $rootScope.showHeader = next.$$route.showHeader;
    });
  }]);
