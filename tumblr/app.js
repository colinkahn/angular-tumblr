goog.provide('tumblr.module');
goog.require('tumblr.post.module');
goog.require('tumblr.postList.module');

tumblr.module = angular.module(
'tumblr', 
  [
    'tumblr.post.module', 
    'tumblr.postList.module'
]);

goog.require('tumblr.greeting');
tumblr.module.directive('tumblrGreeting', tumblr.greeting);

tumblr.module.config(function (tumblrApiProvider) {
  tumblrApiProvider
    .setKey('3Uj5hvL773MVNlhFJC5gyVftNh4Qxci3hqoPkU3nAzp9bFJ8UB')
    .setBlogName('w0w13z0w13.tumblr.com');
});
