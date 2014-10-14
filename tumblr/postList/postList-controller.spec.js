'use strict';

goog.require('tumblr.api.module');
goog.require('tumblr.postList.module');
goog.require('tumblr.post.model.builder.base');
goog.require('tumblr.mock.dao');

describe('postRepository', function () {
  var controller;
  var postDAO;
  var postRepository;
  var $rootScope;

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

    controller = $controller('PostListController');
  }));

  beforeEach(function () {
    postDAO.persist([
      new PostBaseModel.Builder()
          .withId('foo')
          .withType('quote')
          .build()
          .toJSON(),
      new PostBaseModel.Builder()
          .withId('bar')
          .withType('text')
          .build()
          .toJSON()
    ]);
  });

  it('gets all posts', function () {
    $rootScope.$apply(function () {
      controller.setup();
    });

    expect(controller.posts).toEqual([
      jasmine.any(PostBaseModel),
      jasmine.any(PostBaseModel)
    ]);
  });

});
