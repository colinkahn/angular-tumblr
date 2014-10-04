'use strict';

var path = require('path');

module.exports = function (grunt) {
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'tasks/options'),
    init: true,
    data: {
      pkg: grunt.file.readJSON('package.json'),
      env: process.env
    },
    loadGruntTasks: {
      pattern: 'grunt-*'
    }
  });

  grunt.registerTask(
    'default',
    'Watch, Connect, and Karma',
    [
      'karma:unit',
      'concurrent:development'
    ]);
};
