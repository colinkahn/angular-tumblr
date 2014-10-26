'use strict';

goog.require('tumblr.api.module');
goog.require('tumblr.post.module');
goog.require('tumblr.post.model.builder.base');
goog.require('tumblr.mock.dao');

describe('postRepository', function () {
  var postDAO;
  var postRepository;
  var PostBaseModel;
  var PostQuoteModel;
  var PostTextModel;
  var $rootScope;

  beforeEach(angular.mock.module('tumblr.post.module'));
  beforeEach(angular.mock.module('tumblr.api.module'));

  beforeEach(angular.mock.module(function ($provide) {
    $provide.service('postDAO', tumblr.mock.dao);
  }));

  beforeEach(inject(function ($injector) {
    postDAO        = $injector.get('postDAO');
    postRepository = $injector.get('postRepository');
    PostBaseModel  = $injector.get('PostBaseModel');
    PostQuoteModel = $injector.get('PostQuoteModel');
    PostTextModel  = $injector.get('PostTextModel');
    $rootScope     = $injector.get('$rootScope');
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

  describe('finding all posts', function () {
    it('returns post models', function () {
      var posts;

      $rootScope.$apply(function () {
        postRepository.findAll().then(function (result) {
          posts = result;
        });
      });

      expect(posts[0]).toEqual(jasmine.any(PostQuoteModel));
      expect(posts[1]).toEqual(jasmine.any(PostTextModel));
    });
  });

  describe('finding single post', function () {
    it('returns a post model', function () {
      var post;

      $rootScope.$apply(function () {
        postRepository.findById('foo').then(function (result) {
          post = result;
        });
      });

      expect(post).toEqual(jasmine.any(PostQuoteModel));
    });
  });

  describe('finding by page number', function () {
    var posts;

    beforeEach(function () {
      spyOn(postDAO, 'retrieve').andCallThrough();

      $rootScope.$apply(function () {
        postRepository.findByPageNumber('2').then(function (result) {
          posts = result;
        });
      });
    });

    it('calls retrieve with offset and limit', function () {
      expect(postDAO.retrieve).toHaveBeenCalledWith({
        offset: 2 * postRepository.limit,
        limit: postRepository.limit
      });
    });

    it('returns posts', function () {
      expect(posts[0]).toEqual(jasmine.any(PostQuoteModel));
      expect(posts[1]).toEqual(jasmine.any(PostTextModel));
    });
  });

});
