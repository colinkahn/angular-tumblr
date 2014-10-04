'use strict';

goog.require('tumblr.post.model.quote');
goog.require('tumblr.post.model.base');

describe('PostQuoteModel', function () {
  var PostQuoteModel;

  beforeEach(function () {
    PostQuoteModel = tumblr.post.model.quote;
  });

  it('is a subclass of the base model', function () {
    var model = new PostQuoteModel();
    expect(model instanceof tumblr.post.model.base).toBe(true);
  });

  describe('attributes', function () {
    var model;

    beforeEach(function () {
      model = new PostQuoteModel(
        4742980381,
        'w0w13z0w13',
        'http://w0w13z0w13.tumblr.com/post/4742980381',
        'quote',
        '2011-04-19 08:52:34 GMT',
        1303203154,
        'html',
        'KLA85e6c',
        [],
        23,
        'http://source-url.net',
        'source-url.net',
        'foo bar baz',
        '<a href="">...</a>'
      );
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
      expect(model.toJSON()).toEqual({
        id: 4742980381,
        blog_name: 'w0w13z0w13',
        post_url: 'http://w0w13z0w13.tumblr.com/post/4742980381',
        type: 'quote',
        date: '2011-04-19 08:52:34 GMT',
        timestamp: 1303203154,
        format: 'html',
        reblog_key: 'KLA85e6c',
        tags: [],
        note_count: 23,
        source_url: 'http://source-url.net',
        source_title: 'source-url.net',
        text: 'foo bar baz',
        source: '<a href="">...</a>'
      });
    });
  });
});
