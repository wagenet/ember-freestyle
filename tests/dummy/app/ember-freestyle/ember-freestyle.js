export default {
  title: 'Dummy App Styleguide',
  components: [
    {
      name: 'freestyle-headers',
      attrs: {
        h1: 'A Dummy App Using Ember Freestyle 1',
        h2: 'A Dummy App Using Ember Freestyle 2',
        h3: 'A Dummy App Using Ember Freestyle 3',
        h4: 'A Dummy App Using Ember Freestyle 4',
        h5: 'A Dummy App Using Ember Freestyle 5',
        h6: 'A Dummy App Using Ember Freestyle 6'
      }
    },
    {
      name: 'freestyle-palette',
      attrs: {
        title: 'Color Palette',
        colors: ['#DBB1BC', '#D3C4E3', '#8F95D3', '#89DAFF', '#58504A']
      },
      arrayAttrs: ['colors']
    },
    {
      name: 'x-foo',
      attrs: {
        status: 'active'
      }
    },
    {
      name: 'x-foo',
      attrs: {
        status: 'most definitely not active'
      }
    }
  ]
};
