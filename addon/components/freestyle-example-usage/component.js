import Ember from 'ember';
import layout from './template';

const { computed, isArray } = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['freestyle-example-usage'],
  // componentSpec - passed in
  componentAttrs: computed.alias('componentSpec.attrs'),
  componentName: computed.alias('componentSpec.name'),

  attrKeyValuePairs: computed('componentSpec', 'componentAttrs', function() {
    const componentAttrs = this.get('componentAttrs');
    let keys = Ember.A(Object.keys(componentAttrs));
    keys = keys.reject(key => {
      return isArray(componentAttrs[key]);
    });
    const keyValuePairs = keys.map(key => {
      const value = componentAttrs[key];
      return `${key}="${value}"`;
    });
    return Ember.A(keyValuePairs);
  })
});
