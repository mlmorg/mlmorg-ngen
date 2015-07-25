'use strict';
var camelize = require('camelize');

var fetchFromGitConfig = require('../../lib/fetch-from-git-config');

module.exports = {
  project: 'Project name: ',
  description: 'Project description: ',
  gitName: fetchFromGitConfig('user.name'),
  gitEmail: fetchFromGitConfig('user.email'),
  username: function defaultUsername(values, cb) {
    cb(null, 'mlmorg');
  },
  projectNoDash: function readProjectNoDash(values, cb) {
    cb(null, values.project
      .replace(/\-/g, '')
      .toLowerCase());
  },
  projectCamelized: function readProjectName(values, cb) {
    cb(null, camelize(values.project));
  }
};
