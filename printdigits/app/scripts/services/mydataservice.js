'use strict';

/**
 * @ngdoc service
 * @name printdigtsApp.mydataService
 * @description
 * # mydataService
 * Provider in the printdigtsApp.
 */
angular.module('printdigtsApp')
  .provider('mydataService', function () {

    // Private variables
    var salutation = 'Hello';

    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }

    // Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };
    this.getSalutation = function () {
      return salutation;
    };

    // Method for instantiating
    this.$get = function () {
      return new Greeter();
    };
  });
