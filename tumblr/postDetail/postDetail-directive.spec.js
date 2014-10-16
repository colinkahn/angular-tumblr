'use strict';

goog.require('tumblr.api.module');
goog.require('tumblr.postDetail.module');
goog.require('tumblr.post.model.builder.base');
goog.require('tumblr.mock.dao');

describe('postDetail', function () {
  var postDAO;
  var postRepository;
  var PostBaseModel;
  var $rootScope;
  var $location;
  var $scope;

  beforeEach(angular.mock.module('tumblr.postDetail.module'));
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
    var template = '<div post-detail=""></div>';

    beforeEach(inject(function ($compile) {
      element = $compile(template)($scope);
      $scope.$apply();
      controller = element.controller('postDetail');
    }));

    it('has a controller', function () {
      expect(controller).toEqual(jasmine.any(Object));
    });

    it('calls `updatePostId` when the $locationChangeSuccess fires', function () {
      spyOn(controller, 'updatePostId');
      spyOn($location, 'search').andReturn({detail: 'foo'});
      $rootScope.$broadcast('$locationChangeSuccess');
      expect(controller.updatePostId).toHaveBeenCalledWith('foo');
    });

    function getChildElementText (selector) {
      return element[0].querySelector(selector).innerHTML.trim();
    }

    it('shows the details when the post is set on the controller', function () {
      $scope.$apply(function () {
        controller.post = new PostBaseModel.Builder().withId('foo').build();
      });
      expect(getChildElementText('.postDetail__postId')).toBe('foo');
    });
  });
});
