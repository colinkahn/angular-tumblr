goog.provide('tumblr.post.model.quote');
goog.require('tumblr.post.model.base');

function PostQuoteModel (
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
  sourceUrl,
  sourceTitle,
  text,
  source
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

  this.sourceUrl = sourceUrl;
  this.sourceTitle = sourceTitle;
  this.text = text;
  this.source = source;
}

PostQuoteModel.prototype = Object.create(tumblr.post.model.base.prototype);
PostQuoteModel.prototype.constructor = PostQuoteModel;

PostQuoteModel.prototype.toJSON = function () {
  return angular.extend({
    source_url: this.sourceUrl,
    source_title: this.sourceTitle,
    text: this.text,
    source: this.source
  }, tumblr.post.model.base.prototype.toJSON.call(this));
};

tumblr.post.model.quote = PostQuoteModel;
