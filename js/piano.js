(function( win ) {
	'use strict';

	win.Piano = Ember.Application.create({
		VERSION: '1.0',
		rootElement: '#piano',
		// Extend to inherit outlet support
		ApplicationController: Ember.Controller.extend(),
		ready: function() {
			this.initialize();
		}
	});

})( window );
