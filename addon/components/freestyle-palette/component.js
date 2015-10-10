import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  tagName: '',
  layout: layout,
  title: 'Palette',
  colors: Ember.A(['red', 'green', 'blue'])
});
