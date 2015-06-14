import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  classNames: 'ember-freestyle-palette',
  layout: layout,
  title: 'Palette',
  colors: Ember.A(['red', 'green', 'blue'])
});
