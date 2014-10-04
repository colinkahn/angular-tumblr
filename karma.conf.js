module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'closure'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/closure-library/closure/goog/base.js',
      'tumblr/**/*.spec.js',
      {pattern: 'tumblr/**/!(*.spec).js', included: false},
      'tumblr/**/*.html'
    ],
    preprocessors: {
      'tumblr/**/*.spec.js': ['closure', 'closure-iit'],
      'tumblr/**/!(*.spec).js': ['closure'],
      'tumblr/**/*.html': ['ng-html2js']
    },
    browsers: ['Chrome']
  });
};
