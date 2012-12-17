(function( app ) {
  'use strict';

  var Router = Ember.Router.extend({

    root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/',
        connectOutlets: function( router ) {
          console.log('connecting Outlets');
        }
      }),
    })
  });

  app.Router = Router;

})( window.Piano );
