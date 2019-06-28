var ReviewModel = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function() {
    return {
      name: '',
      text: ''
    }
  },

  getRidOfReview: function() {
    debugger;
    this.destroy({ wait: true });
  }
});
