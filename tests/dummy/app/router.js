/* eslint-disable */
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('example');

  this.route('site', { path: '' }, function() {
    this.route('about');
  });

  this.route('docs', function() {
    this.route('installation', { path: '' })
    this.route('freestyle-guide')
  });
});

export default Router;
/* eslint-enable */
