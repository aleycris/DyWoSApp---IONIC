'use strict';

describe('module: main, service: OAuth2Service', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var OAuth2Service;
  beforeEach(inject(function (_OAuth2Service_) {
    OAuth2Service = _OAuth2Service_;
  }));

  it('should do something', function () {
    expect(!!OAuth2Service).toBe(true);
  });

});
