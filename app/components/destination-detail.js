import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(destination) {
      if(confirm('Are you sure you want to delete this exciting vacation destination?')) {
        this.sendAction('destroyDestination', destination);
      }
    }
  }
});
