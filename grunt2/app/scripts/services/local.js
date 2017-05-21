'use strict';

/**
 * @ngdoc service
 * @name kunwarAcadApp.local
 * @description
 * # local
 * Factory in the kunwarAcadApp.
 */
angular.module('kunwarAcadApp')
  .factory('local', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var perferenceList = ["Morning", "Afternoon", "Evening", "Night"];

    // Public API here
    return {
      someMethod: function (sum) {

        return meaningOfLife;
      },
      anotherMethod : function(){
        return 45;
      },
      giveperferences : function(){
        return perferenceList;
      }
    };
  });
