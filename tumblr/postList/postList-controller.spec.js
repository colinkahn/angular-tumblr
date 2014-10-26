'use strict';

goog.require('tumblr.api.module');
goog.require('tumblr.postList.module');
goog.require('tumblr.post.model.builder.base');
goog.require('tumblr.mock.dao');

describe('postList', function () {
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

  xit('gets all posts', function () {
    $rootScope.$apply(function () {
      controller.setup();
    });

    expect(controller.posts).toEqual([
      jasmine.any(PostBaseModel),
      jasmine.any(PostBaseModel)
    ]);
  });

  it('adds a post to the url', function () {
    spyOn(controller.$location, 'search');
    controller.showDetail('foo');
    expect(controller.$location.search).toHaveBeenCalledWith('detail', 'foo');
  });

  describe('page number', function () {
    beforeEach(function () {
      spyOn(controller, 'updatePostsForPage');
      controller.updatePageNumber('1');
    });

    it('updates', function () {
      expect(controller.pageNumber).toBe('1');
    });

    it('finds the posts for the page', function () {
      expect(controller.updatePostsForPage).toHaveBeenCalled();
    });
  });

  describe('finding by page number', function () {
    beforeEach(function () {
      spyOn(postRepository, 'findByPageNumber').andCallThrough();
      controller.pageNumber = '2';

      $rootScope.$apply(function () {
        controller.updatePostsForPage();
      });
    });

    it('calls the right method on the repository', function () {
      expect(postRepository.findByPageNumber).toHaveBeenCalledWith(
        controller.pageNumber
      );
    });

    it('returns the posts', function () {
      expect(controller.posts).toEqual([
        jasmine.any(PostBaseModel),
        jasmine.any(PostBaseModel)
      ]);
    });
  });

  it('gets the next page of posts', function () {
    spyOn(controller.$location, 'search');
    controller.pageNumber = '1';
    controller.nextPage();
    expect(controller.$location.search).toHaveBeenCalledWith('p', '2');
  });

  it('gets the previous page of posts', function () {
    spyOn(controller.$location, 'search');
    controller.pageNumber = '2';
    controller.prevPage();
    expect(controller.$location.search).toHaveBeenCalledWith('p', '1');
  });
});
