import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  classNames: ['x-foo'],
  layout: layout,
  status: 'default'
});
