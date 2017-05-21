'use strict';

describe('Controller: CommonCtrl', function () {

  // load the controller's module
  beforeEach(module('printdigtsApp'));

  var CommonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommonCtrl = $controller('CommonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CommonCtrl.awesomeThings.length).toBe(3);
  });
});
