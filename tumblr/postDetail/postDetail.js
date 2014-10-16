goog.provide('tumblr.postDetail.module');
goog.require('tumblr.post.module');

tumblr.postDetail.module = angular.module('tumblr.postDetail.module', ['tumblr.post.module']);

goog.require('tumblr.postDetail.controller');
tumblr.postDetail.module.controller('PostDetailController', tumblr.postDetail.controller);

goog.require('tumblr.postDetail.directive');
tumblr.postDetail.module.directive('postDetail', tumblr.postDetail.directive);
