import Ember from 'ember';
import layout from './template';

const { computed, get } = Ember;

export default Ember.Component.extend({
  layout: layout,
  emberFreestyle: Ember.inject.service(),
  config: computed.alias('emberFreestyle.config'),

  components: computed('config', function() {
    return Ember.A(get(this, 'config.components'));
  })
});
