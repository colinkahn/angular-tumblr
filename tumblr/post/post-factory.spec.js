'use strict';

goog.require('tumblr.post.module');

describe('postFactory', function () {
  var postFactory;
  var PostBaseModel;
  var PostTextModel;
  var PostQuoteModel;

  beforeEach(angular.mock.module('tumblr.post.module'));

  beforeEach(inject(function ($injector) {
    postFactory = $injector.get('postFactory');
    PostBaseModel = $injector.get('PostBaseModel');
    PostTextModel = $injector.get('PostTextModel');
    PostQuoteModel = $injector.get('PostQuoteModel');
  }));

  it('has each post model', function () {
    expect(postFactory.PostBaseModel).toBe(PostBaseModel);
    expect(postFactory.PostTextModel).toBe(PostTextModel);
    expect(postFactory.PostQuoteModel).toBe(PostQuoteModel);
  });

  it('makes a text model', function () {
    var model = postFactory.make({
      type: 'text'
    });
    expect(model instanceof PostTextModel).toBe(true);
  });

  it('makes a quote model', function () {
    var model = postFactory.make({
      type: 'quote'
    });
    expect(model instanceof PostQuoteModel).toBe(true);
  });

  it('makes a base model', function () {
    var model = postFactory.make();
    expect(model instanceof PostBaseModel).toBe(true);
  });

});
