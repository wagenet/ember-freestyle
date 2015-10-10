import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['freestyle-component'],
  // componentSpec - passed in
  exampleUsage: computed.alias('componentSpec.exampleUsage'),
  exampleUsageUnspecified: computed.none('exampleUsage'),
  showExampleUsage: computed.or('exampleUsageUnspecified','exampleUsage'),
  componentAttrs: computed.alias('componentSpec.attrs'),

  didInsertElement: function() {
    let resolvedComponent = this.container.resolve(`component:${this.get('componentSpec.name')}`);
    let component = resolvedComponent.create(this.get('componentAttrs'));
    this.get('freestyleComponentView').pushObject(component);
  }
});
