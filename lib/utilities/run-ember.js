'use strict';

const path = require('path');
const findup = require('findup-sync');
const runCommand = require('./run-command');

module.exports = function(command, options, dirPath) {
  let cwd = __dirname;
  if (dirPath && dirPath.startsWith(__dirname)) {
    cwd = dirPath;
  }
  let emberCLIPath = findup('node_modules/ember-cli', { cwd });

  let args = ['node', path.join(emberCLIPath, 'bin', 'ember'), command].concat(options);

  return runCommand.apply(undefined, args);
};
