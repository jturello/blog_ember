import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('destination', params.destination_id);
  },
  actions: {
    update(destination, params) {
      Object.keys(params).forEach(function(key){
        if(!((params[key]===undefined) || (params[key]===""))) {
          destination.set(key, params[key]);
        }
      });
      destination.save();
      this.transitionTo('index');
    },
    destroyDestination(destination) {
      destination.destroyRecord();
      this.transitionTo('index');
    }
  }
});
