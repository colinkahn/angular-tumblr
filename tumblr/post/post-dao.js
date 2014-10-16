goog.provide('tumblr.post.dao');

function PostDAO ($q, $cacheFactory, tumblrApi) {
  this.$q    = $q;
  this.cache = $cacheFactory('post-dao');
  this.api   = tumblrApi;
}

PostDAO.prototype.retrieve = function (id) {
  var url = this.api.url('posts');
  var params = {};

  if (id) {
    params.id = id;
  }

  return this.api.get(url, params, this.cache).then(function (result) {
    var posts;

    try {
      posts = result.data.response.posts;
    } catch (e) {
      posts = [];
    }

    return id ? posts[0] : posts;
  });
};

PostDAO.$inject = ['$q', '$cacheFactory', 'tumblrApi'];

tumblr.post.dao = PostDAO;
