import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  image: DS.attr(),
  location: DS.attr()
});
