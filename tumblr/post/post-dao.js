goog.provide('tumblr.post.dao');

function PostDAO ($q, tumblrApi) {
  this.$q  = $q;
  this.api = tumblrApi;
}

PostDAO.prototype.retrieve = function (id) {
  if (id) {
    return this.api.getBlogPosts({
      id: id
    });
  } else {
    return this.api.getBlogPosts();
  }
};

PostDAO.$inject = ['$q', 'tumblrApi'];

tumblr.post.dao = PostDAO;
