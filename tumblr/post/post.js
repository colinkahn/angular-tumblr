goog.provide('tumblr.post.module');
goog.require('tumblr.api.module');

tumblr.post.module = angular.module('tumblr.post.module', ['tumblr.api.module']);

goog.require('tumblr.post.model.base');
goog.require('tumblr.post.model.text');
goog.require('tumblr.post.model.quote');

tumblr.post.module.factory('PostBaseModel', function () {
  return tumblr.post.model.base;
});

tumblr.post.module.factory('PostTextModel', function () {
  return tumblr.post.model.text;
});

tumblr.post.module.factory('PostQuoteModel', function () {
  return tumblr.post.model.quote;
});

goog.require('tumblr.post.dao');
tumblr.post.module.service('postDAO', tumblr.post.dao);

goog.require('tumblr.post.factory');
tumblr.post.module.service('postFactory', tumblr.post.factory);

goog.require('tumblr.post.repository');
tumblr.post.module.service('postRepository', tumblr.post.repository);
