'use strict';

goog.require('tumblr.api.module');
goog.require('tumblr.postDetail.module');
goog.require('tumblr.post.model.builder.base');
goog.require('tumblr.mock.dao');

describe('postRepository', function () {
  var controller;
  var postDAO;
  var postRepository;
  var $rootScope;

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

    controller = $controller('PostDetailController');
  }));

  beforeEach(function () {
    postDAO.persist([
      new PostBaseModel.Builder()
          .withId('foo')
          .withType('quote')
          .build()
          .toJSON(),
    ]);
  });

  it('gets post', function () {
    $rootScope.$apply(function () {
      controller.updatePostId('foo');
    });

    expect(controller.post).toEqual(jasmine.any(PostBaseModel));
  });

});
