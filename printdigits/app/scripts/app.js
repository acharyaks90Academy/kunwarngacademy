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
        showHeaderFooter : true
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        showHeaderFooter : true
      })
      .when('/productdetails', {
        templateUrl: 'views/productdetails.html',
        controller: 'ProductdetailsCtrl',
        controllerAs: 'productdetails',
         showHeaderFooter : true
      })
      .when('/common', {
        templateUrl: 'views/common.html',
        controller: 'CommonCtrl',
        controllerAs: 'common',
         showHeaderFooter : true
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
         showHeaderFooter : true
      })
      .when('/adminmain', {
        templateUrl: 'views/adminmain.html',
        controller: 'AdminmainCtrl',
        controllerAs: 'adminmain',
        showHeaderFooter : false
      })
      .when('/searchpage', {
        templateUrl: 'views/searchpage.html',
        controller: 'SearchpageCtrl',
        controllerAs: 'searchpage',
        showHeaderFooter : true
      })     
      .when('/loginadmin', {
        templateUrl: 'views/loginadmin.html',
        controller: 'LoginadminCtrl',
        controllerAs: 'loginadmin',
         showHeaderFooter : false
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  run(['$rootScope', function($rootScope) {
    $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
       $rootScope.showHeaderFooter = next.$$route.showHeaderFooter;
    });
  }]);
