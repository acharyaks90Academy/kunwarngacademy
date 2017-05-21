'use strict';

describe('Controller: SidenavCtrl', function () {

  // load the controller's module
  beforeEach(module('printdigtsApp'));

  var SidenavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidenavCtrl = $controller('SidenavCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SidenavCtrl.awesomeThings.length).toBe(3);
  });
});
