'use strict';

goog.require('tumblr.post.model.base');
goog.require('tumblr.post.model.builder.base');

describe('PostBaseModel', function () {
  var PostBaseModel;

  beforeEach(inject(function ($injector) {
    PostBaseModel = tumblr.post.model.base;
  }));

  describe('properties', function () {
    var model;

    beforeEach(function () {
      model = new PostBaseModel.Builder().build();
    });

    it('has an id', function () {
      expect(model.id).toBe(4742980381);
    });

    it('has a blog name', function () {
      expect(model.blogName).toBe('w0w13z0w13');
    });

    it('has a post url', function () {
      expect(model.postUrl).toBe('http://w0w13z0w13.tumblr.com/post/4742980381');
    });

    it('has a type', function () {
      expect(model.type).toBe('text');
    });

    it('has a date', function () {
      expect(model.date).toBe('2011-04-19 08:52:34 GMT');
    });

    it('has a timestamp', function () {
      expect(model.timestamp).toBe(1303203154);
    });

    it('has a format', function () {
      expect(model.format).toBe('html');
    });

    it('has a reblog key', function () {
      expect(model.reblogKey).toBe('KLA85e6c');
    });

    it('has tags', function () {
      expect(model.tags).toEqual([
        'foo',
        'bar',
        'baz'
      ]);
    });

    it('has a note count', function () {
      expect(model.noteCount).toBe(23);
    });

    it('can convert to json', function () {
      expect(model.toJSON()).toEqual(PostBaseModel.Builder.defaults);
    });
  });
});
