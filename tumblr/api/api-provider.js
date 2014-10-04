goog.provide('tumblr.api.provider');
goog.require('tumblr.api.service');

function ApiProvider () {
}

ApiProvider.prototype.setKey = function (key) {
  this.key = key;
  return this;
};

ApiProvider.prototype.setBlogName = function (blogName) {
  this.blogName = blogName;
  return this;
};

ApiProvider.prototype.$get = function ($http) {
  return new tumblr.api.service($http, this.blogName, this.key);
};

tumblr.api.provider = ApiProvider;
