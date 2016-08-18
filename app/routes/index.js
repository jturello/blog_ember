import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('destination');
  },

  actions: {
    save3(params) {
      var newDestination = this.store.createRecord('destination', params);
      newDestination.save();
      this.transtionTo('index');
    },

    destroyDestination(destination) {
      destination.destroyRecord();
      this.transitionTo('index');
    }
  }
});
