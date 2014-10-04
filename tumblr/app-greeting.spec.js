'use strict';

goog.require('tumblr.module');

describe('tumblrGreeting', function () {

  beforeEach(angular.mock.module('tumblr'));
  beforeEach(angular.mock.module('tumblr/app-greeting.html'));

  it('just works!', inject(function ($compile, $rootScope) {
    var scope = $rootScope.$new(),
        template = '<div tumblr-greeting=""></div>',
        element = $compile(template)(scope);

    scope.$digest();
    expect(element[0].innerHTML).toContain('<i>Hello World!</i>');
  }));

});
