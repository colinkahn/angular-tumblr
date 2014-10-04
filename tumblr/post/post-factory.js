goog.provide('tumblr.post.factory');

function PostFactory (
  PostBaseModel,
  PostTextModel,
  PostQuoteModel
) {
  this.PostBaseModel = PostBaseModel;
  this.PostTextModel = PostTextModel;
  this.PostQuoteModel = PostQuoteModel;
}

PostFactory.prototype.make = function (data) {
  data = data || {};

  switch (data.type) {
    case 'text':
      return new this.PostTextModel(
        data.id,
        data.blog_name,
        data.post_url,
        data.type,
        data.date,
        data.timestamp,
        data.format,
        data.reblog_key,
        data.tags,
        data.note_count
      );
    case 'quote':
      return new this.PostQuoteModel(
        data.id,
        data.blog_name,
        data.post_url,
        data.type,
        data.date,
        data.timestamp,
        data.format,
        data.reblog_key,
        data.tags,
        data.note_count
      );
    default:
      return new this.PostBaseModel(
        data.id,
        data.blog_name,
        data.post_url,
        data.type,
        data.date,
        data.timestamp,
        data.format,
        data.reblog_key,
        data.tags,
        data.note_count
      );
  }
};

PostFactory.$inject = [
  'PostBaseModel',
  'PostTextModel',
  'PostQuoteModel'
];

tumblr.post.factory = PostFactory;
