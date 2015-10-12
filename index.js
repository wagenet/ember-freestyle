/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-freestyle',

  included: function(app) {
    if (app.import) {
      this.importEmberFreestyleDependencies(app);
    }
    this._super.included(app);
  },

  importEmberFreestyleDependencies: function(app) {
    app.import('vendor/ember-freestyle.css');
  },

  isDevelopingAddon: function() {
    return true;
  }
};
