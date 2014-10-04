goog.provide('tumblr.api.module');

tumblr.api.module = angular.module('tumblr.api.module', []);

goog.require('tumblr.api.provider');
tumblr.api.module.provider('tumblrApi', tumblr.api.provider);
