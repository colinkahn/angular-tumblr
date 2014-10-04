'use strict';

goog.require('tumblr.post.model.text');
goog.require('tumblr.post.model.base');

describe('PostTextModel', function () {
  var PostTextModel;

  beforeEach(function () {
    PostTextModel = tumblr.post.model.text;
  });

  it('is a subclass of the base model', function () {
    var model = new PostTextModel();
    expect(model instanceof tumblr.post.model.base).toBe(true);
  });

  describe('attributes', function () {
    var model;

    beforeEach(function () {
      model = new PostTextModel(
        4742980381,
        'w0w13z0w13',
        'http://w0w13z0w13.tumblr.com/post/4742980381',
        'text',
        '2011-04-19 08:52:34 GMT',
        1303203154,
        'html',
        'KLA85e6c',
        [],
        23,
        'Milky Dog',
        '<p>Foo!</p>'
      );
    });

    it('has a title', function () {
      expect(model.title).toBe('Milky Dog');
    });

    it('has a body', function () {
      expect(model.body).toBe('<p>Foo!</p>');
    });

    it('can convert to json', function () {
      expect(model.toJSON()).toEqual({
        id: 4742980381,
        blog_name: 'w0w13z0w13',
        post_url: 'http://w0w13z0w13.tumblr.com/post/4742980381',
        type: 'text',
        date: '2011-04-19 08:52:34 GMT',
        timestamp: 1303203154,
        format: 'html',
        reblog_key: 'KLA85e6c',
        tags: [],
        note_count: 23,
        title: 'Milky Dog',
        body: '<p>Foo!</p>'
      });
    });
  });

});
