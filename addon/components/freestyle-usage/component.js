import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: layout,
  emberCli: Ember.inject.service(),
  snippetKey: computed('snippetName', function() {
    return `${this.get('snippetName')}.hbs`;
  }),
  positionalParams: ['snippetName']
});
