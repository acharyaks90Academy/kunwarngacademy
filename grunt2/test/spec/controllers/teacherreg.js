'use strict';

describe('Controller: TeacherregCtrl', function () {

  // load the controller's module
  beforeEach(module('kunwarAcadApp'));

  var TeacherregCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherregCtrl = $controller('TeacherregCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherregCtrl.awesomeThings.length).toBe(3);
  });
});
