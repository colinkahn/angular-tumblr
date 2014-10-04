goog.provide('tumblr.post.model.builder.text');
goog.require('tumblr.post.model.builder.base');
goog.require('tumblr.post.model.text');

function PostTextModelBuilder () {
  tumblr.post.model.builder.base.call(this);
  this.attributes = angular.copy(PostTextModelBuilder.defaults);
}

PostTextModelBuilder.prototype = Object.create(tumblr.post.model.builder.base.prototype);
PostTextModelBuilder.prototype.constructor = PostTextModelBuilder;

PostTextModelBuilder.defaults = {
  id: 4742980381,
  blog_name: 'w0w13z0w13',
  post_url: 'http://w0w13z0w13.tumblr.com/post/4742980381',
  type: 'text',
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
  title: 'Milky Dog',
  body: '<p>Foo!</p>'
};

PostTextModelBuilder.prototype.withTitle = function (title) {
  this.attributes.title = title;
  return this;
};

PostTextModelBuilder.prototype.withBody = function (body) {
  this.attributes.body = body;
  return this;
};

PostTextModelBuilder.prototype.build = function () {
  return new tumblr.post.model.text(
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
    this.attributes.title,
    this.attributes.body
  );
};

tumblr.post.model.text.Builder = PostTextModelBuilder;
tumblr.post.model.builder.text = PostTextModelBuilder;
