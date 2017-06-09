'use strict';

describe('Controller: AdminmainCtrl', function () {

  // load the controller's module
  beforeEach(module('printdigtsApp'));

  var AdminmainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminmainCtrl = $controller('AdminmainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminmainCtrl.awesomeThings.length).toBe(3);
  });
});
