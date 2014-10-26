goog.provide('tumblr.postList.controller');

function PostListController ($location, postRepository) {
  this.$location      = $location;
  this.postRepository = postRepository;
}

PostListController.prototype.updatePostsForPage = function () {
  this.postRepository.findByPageNumber(this.pageNumber).then(function (posts) {
    this.posts = posts;
  }.bind(this));
};

PostListController.prototype.updatePageNumber = function (pageNumber) {
  this.pageNumber = pageNumber;
  this.firstPage = pageNumber === '1';
  this.updatePostsForPage();
};

PostListController.prototype.showDetail = function (id) {
  this.$location.search('detail', String(id));
};

PostListController.prototype.nextPage = function () {
  this.$location.search('p', String(+this.pageNumber + 1));
};

PostListController.prototype.prevPage = function () {
  this.$location.search('p', String(+this.pageNumber - 1)
  );
};

PostListController.$inject = [
  '$location',
  'postRepository'
]

tumblr.postList.controller = PostListController;
