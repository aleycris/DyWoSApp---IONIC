'use strict';

describe('module: main, service: LocaleService', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var LocaleService;
  beforeEach(inject(function (_LocaleService_) {
    LocaleService = _LocaleService_;
  }));

  it('should do something', function () {
    expect(!!LocaleService).toBe(true);
  });

});
