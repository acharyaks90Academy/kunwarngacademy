'use strict';

describe('Controller: CourseregCtrl', function () {

  // load the controller's module
  beforeEach(module('kunwarAcadApp'));

  var CourseregCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CourseregCtrl = $controller('CourseregCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CourseregCtrl.awesomeThings.length).toBe(3);
  });
});
