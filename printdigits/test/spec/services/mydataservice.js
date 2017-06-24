'use strict';

describe('Service: mydataService', function () {

  // instantiate service
  var mydataService,
    init = function () {
      inject(function (_mydataService_) {
        mydataService = _mydataService_;
      });
    };

  // load the service's module
  beforeEach(module('printdigtsApp'));

  it('should do something', function () {
    init();

    expect(!!mydataService).toBe(true);
  });

  it('should be configurable', function () {
    module(function (mydataServiceProvider) {
      mydataServiceProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(mydataService.greet()).toEqual('Lorem ipsum');
  });

});
