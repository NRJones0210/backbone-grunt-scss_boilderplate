define('master/app', [
	'jquery',
	'backbone',
	'underscore',
	'modernizr',
	'master/views/homePageView'
], function($, Backbone, _, Modernizr, HomePageView) {

	'use strict';

	var App = {

		/**
		 * 
		 */
		initialize: function() {
			var homePageView = new HomePageView();
			return App;
		}
	};

	return App;

});
