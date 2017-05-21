'use strict';

describe('Controller: ProductdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('printdigtsApp'));

  var ProductdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductdetailsCtrl = $controller('ProductdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
