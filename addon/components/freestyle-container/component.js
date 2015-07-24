import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['freestyle-container'],
  classNameBindings: ['withPadding', 'withBorder'],
  withBorder: true,
  watermarkText: 'Freestyle Container'
});
