'use strict';

describe('Service: url', function () {

  // load the service's module
  beforeEach(module('kunwarAcadApp'));

  // instantiate service
  var url;
  beforeEach(inject(function (_url_) {
    url = _url_;
  }));

  it('should do something', function () {
    expect(!!url).toBe(true);
  });

});
