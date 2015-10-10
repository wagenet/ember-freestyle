import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('freestyle-palette-item', 'Integration | Component | freestyle palette item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{freestyle-palette-item}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#freestyle-palette-item color='#abcdef'}}
    {{/freestyle-palette-item}}
  `);

  const backgroundColorStyle = `style="background-color: #abcdef;"`;
  assert.ok(this.$().html().indexOf(backgroundColorStyle) > -1);
});
