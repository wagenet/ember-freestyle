import Ember from 'ember';
import layout from './template';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  tagName: '',
  layout: layout,
  title: 'Palette',
  freestyle: inject.service('ember-freestyle'),
  description: computed.alias('freestyle.miscellany.human.name'),
  colorPalette: computed.alias('freestyle.palette.ColorPalette-colors'),
  colors: computed('colorPalette', function() {
    return Ember.A(
      Object.keys(this.get('colorPalette')).map((k) => {
        return this.get('colorPalette')[k];
      })
    );
  })
});
