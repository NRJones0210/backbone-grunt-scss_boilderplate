/**
* @module main
*/
(function() {

	'use strict';

	require.config({

		// Disable timeout for scripts.
		waitSeconds: 0,

		baseUrl: '/js/app',

		paths: {
			// Core Libraries
			modernizr:        '../lib/modernizr',						//http://modernizr.com/docs
			jquery:           '../lib/jquery-1.12.1.min',				//http://api.jquery.com/
			text:             '../lib/text',							//https://github.com/requirejs/text
			underscore:       '../lib/underscore-min',					//http://underscorejs.org/
			backbone:         '../lib/backbone-min',					//http://backbonejs.org/
		},

		// Sets the configuration for your third party scripts that are not AMD compatible
		shim: {

			modernizr: {
				exports: 'Modernizr'
			},

			underscore: {
				exports: '_'
			},

			backbone: {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			}
		}
	}); // end require.config

	require(['master/app'], function(App) {

		App.initialize();

	});// end require['app']
}());