'use strict';

describe('Controller: SyllabusregCtrl', function () {

  // load the controller's module
  beforeEach(module('kunwarAcadApp'));

  var SyllabusregCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SyllabusregCtrl = $controller('SyllabusregCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SyllabusregCtrl.awesomeThings.length).toBe(3);
  });
});
