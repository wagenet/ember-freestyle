import Ember from 'ember';
import template from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: template,
  tagName: '',
  emberFreestyle: Ember.inject.service(),
  description: computed.alias('emberFreestyle.config.ColorPalette-colors.primary.description'),
  base: computed.alias('emberFreestyle.config.ColorPalette-colors.primary.base')
});
