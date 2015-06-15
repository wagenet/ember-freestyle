import Ember from 'ember';
import layout from './template';

const { computed, get } = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['freestyle-component'],
  componentSpec: null, // passed in
  exampleUsage: computed.alias('componentSpec.exampleUsage'),
  exampleUsageUnspecified: computed.none('exampleUsage'),
  showExampleUsage: computed.or('exampleUsageUnspecified','exampleUsage'),
  componentAttrs: computed.alias('componentSpec.attrs'),
  preparedAttrs: computed('componentSpec', 'componentAttrs', function() {
    let ca = get(this, 'componentAttrs');
    let cs = get(this, 'componentSpec');
    if (cs.arrayAttrs) {
      cs.arrayAttrs.forEach(function(a) {
        ca[a] = Ember.A(ca[a]);
      });
    }
    return ca;
  }),

  didInsertElement: function() {
    let resolvedComponent = this.container.resolve(`component:${get(this, 'componentSpec.name')}`);
    let component = resolvedComponent.create(get(this, 'preparedAttrs'));
    get(this, 'freestyleComponentView').pushObject(component);
  }
});
