export default {
  title: 'Ember Freestyle Styleguide',
  sections: [
    'Colors',
    'Typography'
  ],
  components: [
    {
      name: 'freestyle-headers',
      section: 'Typography',
      attrs: {
        h1: 'Ember Freestyle Header 1',
        h2: 'Ember Freestyle Header 2',
        h3: 'Ember Freestyle Header 3',
        h4: 'Ember Freestyle Header 4',
        h5: 'Ember Freestyle Header 5',
        h6: 'Ember Freestyle Header 6'
      }
    },
    {
      name: 'freestyle-palette',
      section: 'Colors',
      attrs: {
        colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
      },
      exampleUsage: false
    }
  ]
};
