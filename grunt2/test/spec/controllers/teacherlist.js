'use strict';

describe('Controller: TeacherlistCtrl', function () {

  // load the controller's module
  beforeEach(module('kunwarAcadApp'));

  var TeacherlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherlistCtrl = $controller('TeacherlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherlistCtrl.awesomeThings.length).toBe(3);
  });
});
