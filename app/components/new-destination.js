import Ember from 'ember';

export default Ember.Component.extend({
  addNewDestination: false,
  actions: {
    destinationFormShow() {
      this.set('addNewDestination', true);
    },

    save1() {
      var params = {
        location: this.get('location') ? this.get('location') : "",
        description: this.get('description') ? this.get('description') : "",
        image: this.get('image') ? this.get('image') : "",
      };
      this.set('addNewDestination', false);
      this.sendAction('save2', params);
    }
  }
});
