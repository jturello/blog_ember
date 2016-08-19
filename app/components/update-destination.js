import Ember from 'ember';

export default Ember.Component.extend({
  updateDestinationForm: false,
  actions: {
    updateDestinationForm() {
      this.set('updateDestinationForm', true);
    },
    update(destination) {
      var params = {
        location: this.get('location'), // ? this.get('location') : "",
        description: this.get('description'), // ? this.get('description') : "",
        image: this.get('image'), // ? this.get('image') : "",
      };

      this.set('updateDestinationForm', false);
      this.sendAction('update', destination, params);
    }
  }
});
