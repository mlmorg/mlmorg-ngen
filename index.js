#!/usr/bin/env node
'use strict';
var ngen = require('uber-ngen/bin/ngen');
var parseArgs = require('minimist');
var path = require('path');
var process = require('process');

if (require.main === module) {
  main(parseArgs(process.argv.slice(2)));
}

function main(opts) {
  var templateName = opts.template || 'library';

  opts.directory = __dirname;
  opts.template = path.join('templates', templateName);
  
  ngen(opts);
}
