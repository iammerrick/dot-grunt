var require = {
  baseUrl: 'app',
  paths: {
    'ember' : '../vendor/ember-1.0.0-pre.2.min',
    'jquery' : '../vendor/jquery-1.8.3',
    'handlebars' : '../vendor/handlebars-1.0.rc.1'
  },
  shim: {
    'ember' : {
      exports: 'Ember',
      deps: ['handlebars', 'jquery']
    },
    'handlebars' : {
      exports: 'Handlebars'
    }
  }
};