goog.provide('tumblr.post.repository');

function PostRepository (postDAO, postFactory) {
  this.dao = postDAO;
  this.factory = postFactory;
  this.limit = 10;
}

PostRepository.prototype.findAll = function () {
  var factory = this.factory;

  return this.dao.retrieve().then(function (datas) {
    var posts = [];
    angular.forEach(datas, function (data) {
      posts.push(factory.make(data));
    });

    return posts;
  });
};

PostRepository.prototype.findById = function (id) {
  var factory = this.factory;

  return this.dao.retrieve(id).then(function (data) {
    if (data) {
      return factory.make(data);
    }
  });
};

PostRepository.prototype.findByPageNumber = function (pageNumber) {
  var factory = this.factory;

  return this.dao.retrieve({
    offset: pageNumber * this.limit,
    limit: this.limit
  }).then(function (datas) {
    var posts = [];
    angular.forEach(datas, function (data) {
      posts.push(factory.make(data));
    });

    return posts;
  });
};

PostRepository.$inject = ['postDAO', 'postFactory'];

tumblr.post.repository = PostRepository;
