goog.provide('tumblr.postList.module');
goog.require('tumblr.post.module');

tumblr.postList.module = angular.module('tumblr.postList.module', ['tumblr.post.module']);

goog.require('tumblr.postList.controller');
tumblr.postList.module.controller('PostListController', tumblr.postList.controller);
