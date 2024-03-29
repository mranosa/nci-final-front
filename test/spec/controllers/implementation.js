'use strict';

describe('Controller: ImplementationCtrl', function () {

  // load the controller's module
  beforeEach(module('nciFinalFrontApp'));

  var ImplementationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImplementationCtrl = $controller('ImplementationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
