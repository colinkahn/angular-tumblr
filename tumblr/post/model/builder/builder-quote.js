goog.provide('tumblr.post.model.builder.quote');
goog.require('tumblr.post.model.builder.base');
goog.require('tumblr.post.model.quote');

function PostQuoteModelBuilder () {
  tumblr.post.model.builder.base.call(this);
  this.attributes = angular.copy(PostQuoteModelBuilder.defaults);
}

PostQuoteModelBuilder.prototype = Object.create(tumblr.post.model.builder.base.prototype);
PostQuoteModelBuilder.prototype.constructor = PostQuoteModelBuilder;

PostQuoteModelBuilder.defaults = {
  id: 4742980381,
  blog_name: 'w0w13z0w13',
  post_url: 'http://w0w13z0w13.tumblr.com/post/4742980381',
  type: 'quote',
  date: '2011-04-19 08:52:34 GMT',
  timestamp: 1303203154,
  format: 'html',
  reblog_key: 'KLA85e6c',
  tags: [
    'foo',
    'bar',
    'baz'
  ],
  note_count: 23,
  source_url: 'http://source-url.net',
  source_title: 'source-url.net',
  text: 'foo bar baz',
  source: '<a href="">...</a>'
};

PostQuoteModelBuilder.prototype.withSourceUrl = function (sourceUrl) {
  this.attributes.source_url = sourceUrl;
  return this;
};

PostQuoteModelBuilder.prototype.withSourceTitle = function (sourceTitle) {
  this.attributes.source_title = sourceTitle;
  return this;
};

PostQuoteModelBuilder.prototype.withText = function (text) {
  this.attributes.text = text;
  return this;
};

PostQuoteModelBuilder.prototype.withSource = function (source) {
  this.attributes.source = source;
  return this;
};

PostQuoteModelBuilder.prototype.build = function () {
  return new tumblr.post.model.quote(
    this.attributes.id,
    this.attributes.blog_name,
    this.attributes.post_url,
    this.attributes.type,
    this.attributes.date,
    this.attributes.timestamp,
    this.attributes.format,
    this.attributes.reblog_key,
    this.attributes.tags,
    this.attributes.note_count,
    this.attributes.source_url,
    this.attributes.source_title,
    this.attributes.text,
    this.attributes.source
  );
};

tumblr.post.model.quote.Builder = PostQuoteModelBuilder;
tumblr.post.model.builder.quote = PostQuoteModelBuilder;
