goog.provide('tumblr.mock.dao');

function MockDAO ($q) {
  this.$q = $q;
  this.data = [];
}

MockDAO.prototype.persist = function (data) {
  this.data = data;
};

MockDAO.prototype.retrieve = function (id) {
  var item;

  if (!id || angular.isObject(id)) {
    return this.$q.when(this.data);
  } else {
    angular.forEach(this.data, function (data) {
      if (data.id === id) {
        item = data;
      }
    });

    return this.$q.when(item);
  }
};

MockDAO.$inject = ['$q'];

tumblr.mock.dao = MockDAO;
