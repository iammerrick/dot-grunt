define(['ember', 'controllers/ApplicationController'], function(Ember, ApplicationController) {
  var App = Ember.Application.create();
  
  App.ApplicationController = ApplicationController;
  App.ApplicationView = Ember.View.extend({
    templateName: 'application'
  });
  
  App.Router = Ember.Router.extend({
    root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/'
      })
    })
  }); 
  
  return App;
});