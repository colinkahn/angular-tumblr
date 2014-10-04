'use strict';

goog.require('tumblr.post.model.text');
goog.require('tumblr.post.model.base');
goog.require('tumblr.post.model.builder.text');

describe('PostTextModel', function () {
  var PostTextModel;

  beforeEach(function () {
    PostTextModel = tumblr.post.model.text;
  });

  it('is a subclass of the base model', function () {
    var model = new PostTextModel.Builder().build();
    expect(model instanceof tumblr.post.model.base).toBe(true);
  });

  describe('attributes', function () {
    var model;

    beforeEach(function () {
      model = new PostTextModel.Builder().build();
    });

    it('has a title', function () {
      expect(model.title).toBe('Milky Dog');
    });

    it('has a body', function () {
      expect(model.body).toBe('<p>Foo!</p>');
    });

    it('can convert to json', function () {
      expect(model.toJSON()).toEqual(PostTextModel.Builder.defaults);
    });
  });

});
