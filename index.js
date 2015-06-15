/* jshint node: true */
'use strict';

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
  }
};
