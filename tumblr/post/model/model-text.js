goog.provide('tumblr.post.model.text');
goog.require('tumblr.post.model.base');

function PostTextModel (
  id,
  blogName,
  postUrl,
  type,
  date,
  timestamp,
  format,
  reblogKey,
  tags,
  noteCount,
  title,
  body
) {
  tumblr.post.model.base.call(
    this,
    id,
    blogName,
    postUrl,
    type,
    date,
    timestamp,
    format,
    reblogKey,
    tags,
    noteCount
  );

  this.title = title;
  this.body = body;
}

PostTextModel.prototype = Object.create(tumblr.post.model.base.prototype);
PostTextModel.prototype.constructor = PostTextModel;

PostTextModel.prototype.toJSON = function () {
  return angular.extend({
    title: this.title,
    body: this.body
  }, tumblr.post.model.base.prototype.toJSON.call(this));
};

tumblr.post.model.text = PostTextModel;
