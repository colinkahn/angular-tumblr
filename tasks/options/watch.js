'use strict';

module.exports = {
  js: {
    files: ['tumblr/**/!(*.spec).js'],
    tasks: [
      'karma:unit',
      'closureDepsWriter:tumblr'
    ]
  },
  unit: {
    files: ['tumblr/**/*.spec.js'],
    tasks: ['karma:unit']
  },
  html: {
    files: ['tumblr/**/*.html'],
    tasks: ['karma:unit']
  }
};
