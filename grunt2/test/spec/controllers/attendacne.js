'use strict';

describe('Controller: AttendacneCtrl', function () {

  // load the controller's module
  beforeEach(module('kunwarAcadApp'));

  var AttendacneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AttendacneCtrl = $controller('AttendacneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AttendacneCtrl.awesomeThings.length).toBe(3);
  });
});
