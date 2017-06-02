'use strict';

describe('Service: producService', function () {

  // load the service's module
  beforeEach(module('printdigtsApp'));

  // instantiate service
  var producService;
  beforeEach(inject(function (_producService_) {
    producService = _producService_;
  }));

  it('should do something', function () {
    expect(!!producService).toBe(true);
  });

});
