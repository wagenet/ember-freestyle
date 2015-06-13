import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  h1: 'This is header 1',
  h2: 'This is header 2',
  h3: 'This is header 3',
  h4: 'This is header 4',
  h5: 'This is header 5',
  h6: 'This is header 6'
});
