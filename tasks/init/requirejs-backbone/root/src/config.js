var require = {
  baseUrl: 'app',
  paths: {
    'jquery' : '../vendor/jquery-1.8.3',
    'underscore' : '../vendor/underscore',
    'backbone' : '../vendor/backbone'
  },
  shim: {
    'backbone' : {
      exports: 'Backbone',
      deps: ['underscore', 'jquery']
    },
    'underscore' : {
      exports: '_'
    }
  }
};