/* jshint node: true */
'use strict';
var jsonModule = require('broccoli-json-module');
var mergeTrees = require('broccoli-merge-trees');
var stew = require('broccoli-stew');

module.exports = {
  name: 'ember-freestyle',

  treeForApp: function(tree) {
    var freestyleTree = jsonModule('freestyle');
    freestyleTree = stew.mv(freestyleTree, 'freestyle');
    var appTree = mergeTrees([tree, freestyleTree]);
    return appTree;
  },

  isDevelopingAddon: function() {
    return true;
  }
};
