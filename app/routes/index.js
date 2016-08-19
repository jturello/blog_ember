import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('destination');
  },

  actions: {
    save3(params) {
      var newDestination = this.store.createRecord('destination', params);
      newDestination.save();
      this.transitionTo('index');
    },

    // update(destination, params) {
    //   // debugger;
    //   Object.keys(params).forEach(function(key) {
    //     if(!((params[key]===undefined) || (params[key]===""))) {
    //       destination.set(key, params[key]);
    //     }
    //   });
    //   destination.save();
    //   this.transitionTo('index');
    // },
    //
    // destroyDestination(destination) {
    //   destination.destroyRecord();
    //   this.transitionTo('index');
    // }
  }
});
