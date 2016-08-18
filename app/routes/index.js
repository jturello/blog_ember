import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('destination');
  },

  actions: {
    destroyDestination(destination) {
      destination.destroyRecord();
      this.transitionTo('index');
    }
  }
});
