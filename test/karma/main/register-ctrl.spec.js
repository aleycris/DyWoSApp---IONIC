'use strict';

describe('module: main, controller: RegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var RegisterCtrl;
  beforeEach(inject(function ($controller) {
    RegisterCtrl = $controller('RegisterCtrl');
  }));

  it('should do something', function () {
    expect(!!RegisterCtrl).toBe(true);
  });

});
