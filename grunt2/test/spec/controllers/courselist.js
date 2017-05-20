'use strict';

describe('Controller: CourselistCtrl', function () {

  // load the controller's module
  beforeEach(module('kunwarAcadApp'));

  var CourselistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CourselistCtrl = $controller('CourselistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CourselistCtrl.awesomeThings.length).toBe(3);
  });
});
