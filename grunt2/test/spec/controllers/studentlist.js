'use strict';

describe('Controller: StudentlistCtrl', function () {

  // load the controller's module
  beforeEach(module('kunwarAcadApp'));

  var StudentlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentlistCtrl = $controller('StudentlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentlistCtrl.awesomeThings.length).toBe(3);
  });
});
