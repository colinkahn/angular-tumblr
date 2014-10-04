goog.provide('tumblr.module');
goog.require('tumblr.post.module');

tumblr.module = angular.module('tumblr', ['tumblr.post.module']);

goog.require('tumblr.greeting');
tumblr.module.directive('tumblrGreeting', tumblr.greeting);
