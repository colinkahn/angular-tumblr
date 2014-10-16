'use strict';

goog.require('tumblr.api.module');
goog.require('tumblr.post.module');
goog.require('tumblr.post.model.builder.base');

describe('postDAO', function () {
  var postDAO;
  var PostBaseModel;
  var tumblrApi;
  var $rootScope;
  var $q;
  var posts;

  beforeEach(angular.mock.module('tumblr.post.module'));
  beforeEach(angular.mock.module('tumblr.api.module'));

  beforeEach(angular.mock.module(function (tumblrApiProvider) {
    tumblrApiProvider
      .setKey('foobar')
      .setBlogName('w0w13z0w13');
  }));

  beforeEach(inject(function ($injector) {
    tumblrApi     = $injector.get('tumblrApi');
    postDAO       = $injector.get('postDAO');
    PostBaseModel = $injector.get('PostBaseModel');
    $rootScope    = $injector.get('$rootScope');
    $q            = $injector.get('$q');
  }));

  beforeEach(function () {
    posts = [
      new PostBaseModel.Builder()
          .withId('foo')
          .build()
          .toJSON(),
      new PostBaseModel.Builder()
          .withId('bar')
          .build()
          .toJSON(),
      new PostBaseModel.Builder()
          .withId('baz')
          .build()
          .toJSON()
    ];

    spyOn(tumblrApi, 'get').andReturn($q.when({
      data: {
        response: {
          posts: posts
        }
      }
    }));
  });

  describe('retrieve posts', function () {
    var data;

    beforeEach(function () {
      $rootScope.$apply(function () {
        postDAO.retrieve().then(function (result) {
          data = result;
        });
      });
    });

    it('returns all posts', function () {
      expect(data).toEqual(posts);
    });
  });

  describe('retrieve using id', function () {

    it('returns the post', function () {
      var data;

      tumblrApi.get.andReturn($q.when({
        data: {
          response: {
            posts: [
              posts[0]
            ]
          }
        }
      }));

      $rootScope.$apply(function () {
        postDAO.retrieve('foo').then(function (result) {
          data = result;
        });
      });

      expect(tumblrApi.get).toHaveBeenCalledWith(
        'http://api.tumblr.com/v2/blog/w0w13z0w13/posts',
        {id: 'foo'},
        postDAO.cache
      );
      expect(data).toBe(posts[0]);
    });
  });
});
