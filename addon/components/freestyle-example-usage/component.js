import Ember from 'ember';
import layout from './template';

const { computed, get } = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['freestyle-example-usage'],
  componentSpec: null, // passed in
  componentAttrs: computed.alias('componentSpec.attrs'),
  componentName: computed.alias('componentSpec.name'),

  attrKeyValuePairs: computed('componentAttrs', function() {
    let ca = get(this, 'componentAttrs');
    let kvp = Ember.keys(ca).map((key) => {
      let value = ca[key];
      return `${key}="${value}"`;
    });
    return Ember.A(kvp);
  })
});
