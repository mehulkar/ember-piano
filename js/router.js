(function( app ) {
	'use strict';

	var Router = Ember.Router.extend({

		root: Ember.Route.extend({
			index: Ember.Route.extend({
				route: '/',
				connectOutlets: function( router ) {
					console.log('connecting outlets');
				}
			}),
		})
	});

	app.Router = Router;

})( window.Piano );
