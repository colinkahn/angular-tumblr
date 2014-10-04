goog.provide('tumblr.base.repository');

function BaseRepository () {}

BaseRepository.prototype.add = function (items) {
  if (angular.isArray(items)) {
    angular.forEach(items, function (item) {
      this.addOne(item);
    }, this);
  } else {
    this.addOne(items);
  }
};

BaseRepository.prototype.addOne = function (item) {
  throw new Error('You must implement addOne'); 
};

tumblr.base.repository = BaseRepository;
