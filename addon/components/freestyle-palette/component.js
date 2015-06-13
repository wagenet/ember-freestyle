import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  classNames: 'ember-freestyle-palette',
  layout: layout,
  colors: Ember.A(['red', 'blue', 'green'])
});
