goog.provide('tumblr.postList.controller');

function PostListController (postRepository) {
  this.postRepository = postRepository;
}

PostListController.prototype.setup = function () {
  this.postRepository.findAll().then(function (posts) {
    this.posts = posts;
  }.bind(this));
};

PostListController.$inject = [
  'postRepository'
]

tumblr.postList.controller = PostListController;
