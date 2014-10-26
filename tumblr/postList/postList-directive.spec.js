'use strict';

goog.require('tumblr.api.module');
goog.require('tumblr.postList.module');
goog.require('tumblr.post.model.builder.base');
goog.require('tumblr.mock.dao');

describe('postList', function () {
  var postDAO;
  var postRepository;
  var PostBaseModel;
  var $rootScope;
  var $location;
  var $scope;

  beforeEach(angular.mock.module('tumblr.postList.module'));
  beforeEach(angular.mock.module('tumblr.api.module'));

  beforeEach(angular.mock.module(function ($provide) {
    $provide.service('postDAO', tumblr.mock.dao);
  }));

  beforeEach(inject(function ($controller, $injector) {
    postDAO        = $injector.get('postDAO');
    postRepository = $injector.get('postRepository');
    PostBaseModel  = $injector.get('PostBaseModel');
    $rootScope     = $injector.get('$rootScope');
    $location      = $injector.get('$location');
    $scope         = $rootScope.$new();
  }));

  describe('template', function () {
    var element;
    var controller;
    var template = '<div post-list=""></div>';

    beforeEach(inject(function ($compile) {
      element = $compile(template)($scope);
      $scope.$apply();
      controller = element.controller('postList');
    }));

    it('has a controller', function () {
      // This can be an actual class comparison
      expect(controller).toEqual(jasmine.any(Object));
    });

    it('calls `updatePageNumber` when the $locationChangeSuccess fires', function () {
      spyOn(controller, 'updatePageNumber');
      spyOn($location, 'search').andReturn({p: '1'});
      $rootScope.$broadcast('$locationChangeSuccess');
      expect(controller.updatePageNumber).toHaveBeenCalledWith('1');
    });
  });
});
