import Ember from 'ember';

var destinations = [{
  id: 1,
  location: "Honolulu, HI",
  description: "Beautiful beaches, wonderful weather, and sharks don't eat people that often. Come visit!",
  image: "http://paradiseintheworld.com/wp-content/uploads/2012/03/honolulu-beach.jpg"
}, {
  id: 2,
  location: "Mytilene, Greece",
  description: "Ancient city lovely beaches, day trips to Turkey, and very few shark attacks. Come visit!",
  image: "http://www.mvmtravel.com/images/articleimages/2626/dimage2682.jpg"
}, {
  id: 3,
  location: "Phuket, Thailand",
  description: "Surrounded by water, beautiful beaches, sea caves and more shark attacks than other places, but they are small sharks",
  image: "http://www.merittravel.com/wp-content/uploads/2014/08/Adv-Asia-Thailand-Thai-Sailling-960.jpg"
}];

export default Ember.Route.extend({
  model() {
    return destinations;
  },
});
