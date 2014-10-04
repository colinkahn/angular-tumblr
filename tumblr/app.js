goog.provide('tumblr.module');

tumblr.module = angular.module('tumblr', []);

goog.require('tumblr.greeting');
tumblr.module.directive('tumblrGreeting', tumblr.greeting);
