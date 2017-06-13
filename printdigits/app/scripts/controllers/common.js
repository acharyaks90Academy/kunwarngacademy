// 'use strict';

/**
 * @ngdoc function
 * @name printdigtsApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the printdigtsApp
 */
angular.module('printdigtsApp')
  .controller('CommonCtrl', function ($scope, $http, $rootScope, $location, $timeout, homePage) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // $http({
    //   method: 'GET',
    //   url: 'json/demoData.json'
    // }).then(function successCallback(response) {
    //   $scope.menu = response.data.mainMenu;
    //   $scope.listPro = response.data.productList;
    //   $scope.footerLink = response.data.footerMenu

    // }, function errorCallback(response) {
    //   $scope.noDataFound = true;

    // });


    // mydata a variable which we can use future

    var mydata = homePage.getData($scope);

    var fData = homePage.footerData($scope);

     $rootScope.searchResult = $scope.searchResult;





    $scope.emailErrorMessage = false;
    $scope.emailSuccessMessage = false;

    $scope.submitNewsletter = function () {

      var emailName = document.newsLetter.newsEmail.value;
      var atposition = emailName.indexOf("@");
      var dotposition = emailName.lastIndexOf(".");

      if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= emailName.length) {
        $scope.emailErrorMessage = true;

        $timeout(function () {
          $scope.emailErrorMessage = false;

        }, 1000)

      } else {
        $scope.emailSuccessMessage = true;


        $timeout(function () {
          $scope.emailErrorMessage = false;

        }, 500)

      }



    }


    var d = new Date();
    var n = d.getFullYear();

    $scope.dateTme = n;


    // $scope.typeDemo = homePage.totalCode(4, 5);
    // console.log(homePage.totalCode(4, 5))
    // $timeout(function () {
    //   $scope.loginError = "";
    //   $scope.passwordError = "";
    // }, 1500)


    $scope.loginError = false;
    $scope.passwordError = false;
    $scope.passMatch = false;



    $scope.searchPage = function(loc){
    console.log($location.absUrl());    

   if($location.path()==="/searchpage"){
   }else{
     $location.path("/searchpage");
   }

    }




    $scope.loginBtn = function () {

      if ($scope.myUsername == "" || $scope.myUsername == null || $scope.myUsername == " " || $scope.myPassword == "" || $scope.myPassword == null || $scope.myPassword == " ") {
        $scope.loginError = true;
        $scope.passwordError = true;

        $timeout(function () {
          $scope.loginError = "";
          $scope.passwordError = "";
        }, 2000)



      } else if ($scope.myUsername == $scope.myPassword) {
        $scope.loginError = false;
        $scope.passwordError = false;
        alert("pass match...")



      } else {

        $scope.passMatch = true;
      }


    }

    $scope.messageRemove = function () {
      $scope.loginError = "";
      $scope.passwordError = "";

    }


    $scope.navigateClick = function (loc) {
     
      if (loc == "contactUs") {      
        $location.path('/contactus');
      }else if(loc=="home"){
        $location.path('/index');
      }else if(loc=="aboutUs"){
        $location.path('/about');
      }
    }


  


    $scope.typeDemo = function (a, b) {
      return homePage.totalCode(a, b);

      console.log(homePage.totalCode(4, 5))
    }

  });
