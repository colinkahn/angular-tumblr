goog.provide('tumblr.postList.controller');

function PostListController ($location, postRepository) {
  this.$location      = $location;
  this.postRepository = postRepository;
}

PostListController.prototype.setup = function () {
  this.postRepository.findAll().then(function (posts) {
    this.posts = posts;
  }.bind(this));
};

PostListController.prototype.showDetail = function (id) {
  this.$location.search('detail', String(id));
};

PostListController.$inject = [
  '$location',
  'postRepository'
]

tumblr.postList.controller = PostListController;
