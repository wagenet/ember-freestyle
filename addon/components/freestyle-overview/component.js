import Ember from 'ember';
import layout from './template';

const { computed, get } = Ember;

export default Ember.Component.extend({
  layout: layout,
  config: null, // passed in

  components: computed('config', function() {
    return Ember.A(get(this, 'config.components'));
  })
});
