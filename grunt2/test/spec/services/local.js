'use strict';

describe('Service: local', function () {

  // load the service's module
  beforeEach(module('kunwarAcadApp'));

  // instantiate service
  var local;
  beforeEach(inject(function (_local_) {
    local = _local_;
  }));

  it('should do something', function () {
    expect(!!local).toBe(true);
  });

});
