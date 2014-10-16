goog.provide('tumblr.postDetail.controller');

function PostDetailController (postRepository) {
  this.postRepository = postRepository;
}

PostDetailController.prototype.updatePostId = function (id) {
  this.postId = id;

  if (!id) {
    this.post = null;
    return;
  }

  this.postRepository.findById(id).then(function (post) {
    this.post = post;
  }.bind(this));
};

PostDetailController.$inject = [
  'postRepository'
]

tumblr.postDetail.controller = PostDetailController;
