import Ember from 'ember';
import template from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: template,
  tagName: '',
  freestyle: Ember.inject.service('ember-freestyle'),
  description: computed.alias('freestyle.config.ColorPalette-colors.primary.description'),
  base: computed.alias('freestyle.config.ColorPalette-colors.primary.base')
});
