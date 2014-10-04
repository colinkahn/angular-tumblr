goog.provide('tumblr.post.model.builder.base');
goog.require('tumblr.post.model.base');

function PostBaseModelBuilder () {
  this.attributes = angular.copy(PostBaseModelBuilder.defaults);
}

PostBaseModelBuilder.defaults = {
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
  note_count: 23
};

PostBaseModelBuilder.prototype.withId = function (id) {
  this.attributes.id = id;
  return this;
};

PostBaseModelBuilder.prototype.withBlogName = function (blogName) {
  this.attributes.blog_name = blogName;
  return this;
};

PostBaseModelBuilder.prototype.withPostUrl = function (postUrl) {
  this.attributes.post_url = postUrl;
  return this;
};

PostBaseModelBuilder.prototype.withType = function (type) {
  this.attributes.type = type;
  return this;
};

PostBaseModelBuilder.prototype.withDate = function (date) {
  this.attributes.date = date;
  return this;
};

PostBaseModelBuilder.prototype.withTimestamp = function (timestamp) {
  this.attributes.timestamp = timestamp;
  return this;
};

PostBaseModelBuilder.prototype.withFormat = function (format) {
  this.attributes.format = format;
  return this;
};

PostBaseModelBuilder.prototype.withReblogKey = function (reblogKey) {
  this.attributes.reblog_key = reblogKey;
  return this;
};

PostBaseModelBuilder.prototype.withTags = function (tags) {
  this.attributes.tags = tags;
  return this;
};

PostBaseModelBuilder.prototype.withNoteCount = function (noteCount) {
  this.attributes.note_count = noteCount;
  return this;
};

PostBaseModelBuilder.prototype.build = function () {
  return new tumblr.post.model.base(
    this.attributes.id,
    this.attributes.blog_name,
    this.attributes.post_url,
    this.attributes.type,
    this.attributes.date,
    this.attributes.timestamp,
    this.attributes.format,
    this.attributes.reblog_key,
    this.attributes.tags,
    this.attributes.note_count
  );
};

tumblr.post.model.base.Builder = PostBaseModelBuilder;
tumblr.post.model.builder.base = PostBaseModelBuilder;
