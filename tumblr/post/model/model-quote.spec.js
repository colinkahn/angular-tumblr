'use strict';

goog.require('tumblr.post.model.quote');
goog.require('tumblr.post.model.builder.quote');

describe('PostQuoteModel', function () {
  var PostQuoteModel;

  beforeEach(function () {
    PostQuoteModel = tumblr.post.model.quote;
  });

  it('is a subclass of the base model', function () {
    var model = new PostQuoteModel.Builder().build();
    expect(model instanceof tumblr.post.model.base).toBe(true);
  });

  describe('attributes', function () {
    var model;

    beforeEach(function () {
      model = new PostQuoteModel.Builder().build();
    });

    it('has a source url', function () {
      expect(model.sourceUrl).toBe('http://source-url.net');
    });

    it('has a source title', function () {
      expect(model.sourceTitle).toBe('source-url.net');
    });

    it('has text', function () {
      expect(model.text).toBe('foo bar baz');
    });

    it('has a source', function () {
      expect(model.source).toBe('<a href="">...</a>');
    });

    it('can convert to json', function () {
      expect(model.toJSON()).toEqual(PostQuoteModel.Builder.defaults);
    });
  });
});
