goog.provide('tumblr.post.model.base');

function PostBaseModel (
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
) {
  this.id = id;
  this.blogName = blogName;
  this.postUrl = postUrl;
  this.type = type;
  this.date = date;
  this.timestamp = timestamp;
  this.format = format;
  this.reblogKey = reblogKey;
  this.tags = tags;
  this.noteCount = noteCount;
}

PostBaseModel.prototype.toJSON = function () {
  return {
    id: this.id,
    blog_name: this.blogName,
    post_url: this.postUrl,
    type: this.type,
    date: this.date,
    timestamp: this.timestamp,
    format: this.format,
    reblog_key: this.reblogKey,
    tags: this.tags,
    note_count: this.noteCount
  };
};

tumblr.post.model.base = PostBaseModel;
