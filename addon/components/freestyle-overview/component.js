import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: layout,
  emberFreestyle: Ember.inject.service(),
  // section - passed in
  components: computed('section', 'emberFreestyle.components.[]', function() {
    const components = this.get('emberFreestyle.components');
    const section = this.get('section');
    if (!section) {
      return components;
    }
    return Ember.A(components).filter((c) => {
      return c.section === section;
    });
  })
});
