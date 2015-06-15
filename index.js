/* jshint node: true */
'use strict';
var jsonModule = require('broccoli-json-module');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-freestyle',

  included: function(app) {
    if (app.import) {
      this.importCss(app);
    }
    this._super.included(app);
  },

  importCss: function(app) {
    app.import('vendor/ember-freestyle.css');
  },

  postprocessTree: function(type, tree) {
    return type === 'js' ? jsonModule(tree) : tree;
  }
};
