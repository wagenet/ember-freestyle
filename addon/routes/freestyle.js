import Ember from 'ember';

const { computed, get } = Ember;

export default Ember.Route.extend({
  emberFreestyle: Ember.inject.service('ember-freestyle'),
  config: computed('emberFreestyle', function() {
    return get(this, 'emberFreestyle.config');
  }),
  model: function() {
    return get(this, 'config');
  }
});
