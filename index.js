/* jshint node: true */
'use strict';
var jsonModule = require('broccoli-json-module');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-freestyle',

  treeForApp: function(tree) {
    var freestyleTree = jsonModule('freestyle');
    var appTree = mergeTrees([tree, freestyleTree]);
    return appTree;
  },

  isDevelopingAddon: function() {
    return true;
  }
};
