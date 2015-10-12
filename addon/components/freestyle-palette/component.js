import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  tagName: '',
  layout: layout,
  title: 'Palette',
  colors: Ember.A([
    {
      name: 'red',
      hex: '#ff0000'
    },
    {
      name: 'green',
      hex: '#00ff00'
    },
    {
      name: 'blue',
      hex: '#0000ff'
    }
    ])
});
