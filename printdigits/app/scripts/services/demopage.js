'use strict';

/**
 * @ngdoc service
 * @name printdigtsApp.demoPage
 * @description
 * # demoPage
 * Factory in the printdigtsApp.
 */
angular.module('printdigtsApp')
  .factory('demoPage', function () {

   return {

    sayHello : function(){
      return  "Hello, I am from Factory!!";
    }, 


    repeatad : function () {
    var address = ["Delhi","GGN","FBD"];
    return address;
     }



   }
  });
