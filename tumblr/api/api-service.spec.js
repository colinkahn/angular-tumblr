'use strict';

goog.require('tumblr.api.module');

describe('tumblrApi', function () {
  var tumblrApi;

  beforeEach(angular.mock.module('tumblr.api.module'));

  beforeEach(angular.mock.module(function (tumblrApiProvider) {
    tumblrApiProvider
      .setKey('foobar')
      .setBlogName('w0w13z0w13');
  }));

  beforeEach(inject(function ($injector) {
    tumblrApi = $injector.get('tumblrApi');
  }));

  it('sets the key', function () {
    expect(tumblrApi.key).toBe('foobar');
  });

  it('sets the blog name', function () {
    expect(tumblrApi.blogName).toBe('w0w13z0w13');
  });

  it('gets a url', inject(function ($httpBackend) {
    var url = [
      'http://api.tumblr.com/v2/blog/w0w13z0w13/info',
      '?api_key=foobar&callback=JSON_CALLBACK'
    ].join('');

    $httpBackend.when('JSONP', url).respond(200);
    tumblrApi.get('http://api.tumblr.com/v2/blog/w0w13z0w13/info', null);
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('creates a url', function () {
    var url = 'http://api.tumblr.com/v2/blog/' + tumblrApi.blogName + '/info';
    expect(tumblrApi.url('info')).toBe(url);
  });

  describe('resources', function () {
    beforeEach(function () {
      spyOn(tumblrApi, 'get');
    });

    it('gets blog info', function () {
      var url = 'http://api.tumblr.com/v2/blog/w0w13z0w13/info',
          params = {};
      tumblrApi.getBlogInfo(params);
      expect(tumblrApi.get).toHaveBeenCalledWith(url, params, true);
    });

    it('gets the blog avatar', function () {
      var url = 'http://api.tumblr.com/v2/blog/w0w13z0w13/avatar/32',
          params = {};
      tumblrApi.getBlogAvatar(32, params);
      expect(tumblrApi.get).toHaveBeenCalledWith(url, params, true);
    });

    it('gets blog followers', function () {
      var url = 'http://api.tumblr.com/v2/blog/w0w13z0w13/followers',
          params = {};
      tumblrApi.getBlogFollowers(params);
      expect(tumblrApi.get).toHaveBeenCalledWith(url, params, true);
    });

    it('gets blog posts', function () {
      var url = 'http://api.tumblr.com/v2/blog/w0w13z0w13/posts',
          params = {};
      tumblrApi.getBlogPosts(params);
      expect(tumblrApi.get).toHaveBeenCalledWith(url, params, true);
    });

    it('gets blog likes', function () {
      var url = 'http://api.tumblr.com/v2/blog/w0w13z0w13/likes',
          params = {};
      tumblrApi.getBlogLikes(params);
      expect(tumblrApi.get).toHaveBeenCalledWith(url, params, true);
    });
  });
});
