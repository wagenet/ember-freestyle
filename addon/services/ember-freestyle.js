import Ember from 'ember';

const { computed } = Ember;

export default Ember.Service.extend({
  // config - injected
  components: computed('config', function() {
    return Ember.A(this.get('config.components'));
  }),
  sections: computed('config', function() {
    return Ember.A(this.get('config.sections'));
  })
});
