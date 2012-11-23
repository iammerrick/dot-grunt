define(['jquery', 'backbone'], function($, Backbone) {
  var HelloView = Backbone.View.extend({
    render: function() {
      this.$el.html('Welcome! Make something awesome!');
      return this;
    }
  });

  return HelloView;
});