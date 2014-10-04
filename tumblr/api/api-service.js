goog.provide('tumblr.api.service');

function ApiService ($http, blogName, key) {
  this.key = key;
  this.blogName = blogName;
  this.$http = $http;
  this.root = 'http://api.tumblr.com/v2/blog/' + this.blogName + '/';
}

ApiService.prototype.get = function (path, params, withoutApiKey) {
  params = params || {};
  if (!withoutApiKey) {
    params.api_key = this.key;
  }
  params.callback = 'JSON_CALLBACK';
  return this.$http({
    url: path,
    method: 'JSONP',
    params: params
  });
};

ApiService.prototype.url = function () {
  var parts = Array.prototype.slice.call(arguments, 0);
  return this.root + parts.join('/');
};

ApiService.prototype.getBlogInfo = function (params) {
  return this.get(this.url('info'), params, true);
};

ApiService.prototype.getBlogAvatar = function (size, params) {
  return this.get(this.url('avatar', size), params, true);
};

ApiService.prototype.getBlogFollowers = function (params) {
  return this.get(this.url('followers'), params, true);
};

ApiService.prototype.getBlogPosts = function (params) {
  return this.get(this.url('posts'), params, true);
};

ApiService.prototype.getBlogLikes = function (params) {
  return this.get(this.url('likes'), params, true);
};

tumblr.api.service = ApiService;
