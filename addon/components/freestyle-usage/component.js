import Ember from 'ember';
import layout from './template';

const { computed, inject } = Ember;

let FreestyleUsage = Ember.Component.extend({
  layout,
  classNames: ['FreestyleUsage'],
  classNameBindings: ['inline:FreestyleUsage--inline'],
  emberFreestyle: inject.service(),
  showLabels: computed.alias('emberFreestyle.showLabels'),
  showNotes: computed.alias('emberFreestyle.showNotes'),
  showCode: computed.alias('emberFreestyle.showCode'),
  snippetHbs: computed('snippetName', function() {
    return `${this.get('snippetName')}.hbs`;
  }),
  snippetJs: computed('snippetName', function() {
    return `${this.get('snippetName')}.js`;
  }),
  snippetScss: computed('snippetName', function() {
    return `${this.get('snippetName')}.scss`;
  }),
  snippetNotesJs: computed('snippetName', function() {
    return `${this.get('snippetName')}:notes.js`;
  }),
  snippetNotesHbs: computed('snippetName', function() {
    return `${this.get('snippetName')}:notes.hbs`;
  }),
  defaultTheme: computed.alias('emberFreestyle.defaultTheme'),
  // highlightJsTheme - passed in
  computedTheme: computed('defaultTheme', 'highlightJsTheme', function() {
    return this.get('highlightJsTheme') || this.get('defaultTheme');
  }),
  isNote: computed('snippetName', function() {
    let snippetName = this.get('snippetName');
    return snippetName && snippetName.indexOf(':notes') >= 0;
  })
});

FreestyleUsage.reopenClass({
  positionalParams: ['snippetName']
});

export default FreestyleUsage;
