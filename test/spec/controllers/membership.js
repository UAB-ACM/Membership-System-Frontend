'use strict';

describe('Controller: MembershipCtrl', function () {

  // load the controller's module
  beforeEach(module('membershipSystemApp'));

  var MembershipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembershipCtrl = $controller('MembershipCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
