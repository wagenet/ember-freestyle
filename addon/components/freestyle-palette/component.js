import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: '',
  layout: layout,
  title: 'Palette',
  emberFreestyle: Ember.inject.service(),
  colorPalette: computed.alias('emberFreestyle.config.ColorPalette-colors'),
  colors: computed('colorPalette', function() {
    return Ember.A(
      Object.keys(this.get('colorPalette')).map((k) => {
        return this.get('colorPalette')[k];
      })
    );
  })
});
