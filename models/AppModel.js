var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      beers: new BeersCollection(),

      current_beer: null,

      // either true or false
      show_reviews: false
    }
  },

  initialize: function() {
    this.listenTo(this, 'change:current_beer', this.updateURL);
  },

  updateURL: function() {
    this.get('current_beer').get('reviews').url = 'https://beer-review-api.herokuapp.com/beers/' + this.get('current_beer').get('id') + '/reviews';
    console.log(this.get('current_beer').get('reviews').url);
  },

  showReviews: function (id) {
    var allBeers = this.get('beers');
    debugger
    var currentBeer = allBeers.findWhere({ id: id });

    this.set('current_beer', currentBeer);
    this.set('show_reviews', true);    
  },

  showBeers: function () {
    this.set('show_reviews', false);
  }
});
