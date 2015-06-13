import Ember from 'ember';
import layout from './template';

const { computed, get } = Ember;

export default Ember.Component.extend({
  layout: layout,
  componentSpec: null, // passed in
  componentAttrs: computed.alias('componentSpec.attrs'),

  didInsertElement: function() {
    let resolvedComponent = this.container.resolve(`component:${get(this, 'componentSpec.name')}`);
    let component = resolvedComponent.create(get(this, 'componentAttrs'));
    get(this, 'freestyleComponentView').pushObject(component);
  }
});
