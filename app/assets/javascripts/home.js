( function(window, document, $, undefined) {
    'use strict';
    var KB = ( function(KB) {

		//wait for DOM ready
		$(function(){
			//Add Flowers to the logo 
			//check if flowers will render (border-radius).
			if($('html').hasClass('borderradius') ) {
				var flowerTemplate = $('#flower-template').html();
				$('.flower').each(function(){
					$(this).html(flowerTemplate);
				});
			}
			//Shrink the logo if the browser width becomes less than 960px
			$(window).resize(function() {
				var domWidth = $(document).width();
				if( domWidth <= 960 ) {
					//reduce the font-size to 10% of the browser width
					$('#logo-wrapper').css('font-size', domWidth/12 + 'px')
				}
			});

			// show hide the gallery
			$('#gallery .tab').click(function(){
				var $gallery = $('#gallery');
				if($gallery.hasClass('show')){
					$gallery.removeClass('show');
					$gallery.animate({left:'-72%'})
				} else {
					$gallery.addClass('show');
					$gallery.animate({left:0})
				}
			});
		});
			
        KB.Gallery = (function(){

			function init(){

			}
			
			//return functions and variables that you want accessible outside of Personalization
			return {
				init : init,

			};
			
		})();
		
		return KB;

		
	}(window.KB || {}));
	
	//update the Global STAPLES name space with new functionality and variables
	window.KB = KB;
	
	// Run as soon as this file loads
	//KB.Gallery.init();

}(window, document, jQuery));

// Experiment with Ember.js

// Create a new App
App = Ember.Application.create();

App.Router.map(function(){
	this.resource('gallery');
});

App.GalleryRoute = Ember.Route.extend({
	title: "TEST - Room to Grow",
	description: "TEST - Fall Gala held in Boston",
	caption: "TEST - This is an awesome photo",
	photo_src_full: "http://placekitten.com/200/300",
  
	model: function() {
		var photos = [
			{photo_src: "http://placekitten.com/150/150"},
			{photo_src: "http://placekitten.com/150/150"},
			{photo_src: "http://placekitten.com/150/150"},
			{photo_src: "http://placekitten.com/150/150"}
		];
		return photos
	}
});

/* App.Store = DS.Store.extend({
	revision: 1,
	adapter: 'DS.FixtureAdapter'
});

App.Gallery = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	caption: DS.attr('string'),
	photo_src_full: DS.attr('string')
});

App.Gallery.FIXTURES = [{
	id:1,
	title: "TEST - Room to Grow",
	description: "TEST - Fall Gala held in Boston",
	caption: "TEST - This is an awesome photo",
	photo_src_full: "http://placekitten.com/200/300",
},{
	id:2,
	title: "TEST2 - Room to Grow",
	description: "TEST2 - Fall Gala held in Boston",
	caption: "TEST2 - This is an awesome photo",
	photo_src_full: "http://placekitten.com/150/150",
}];

App.Photo = DS.Model.extend({
	photo_src: DS.attr('string')
});

App.Photo.FIXTURES = [{
	id:1,
	photo_src: "http://placekitten.com/150/150",
},{
	id:2,
	photo_src: "http://placekitten.com/150/150",
},{
	id:3,
	photo_src: "http://placekitten.com/150/150",
},{
	id:4,
	photo_src: "http://placekitten.com/150/150",
},{
	id:5,
	photo_src: "http://placekitten.com/150/150",
}];

// Create a controller
App.ApplicationController = Ember.Controller.extend({
	title: "TEST - Room to Grow",
	description: "TEST - Fall Gala held in Boston",
	caption: "TEST - This is an awesome photo",
	photo_src_full: "http://placekitten.com/200/300",
  
	photo: [
		{photo_src: "http://placekitten.com/150/150"},
		{photo_src: "http://placekitten.com/150/150"},
		{photo_src: "http://placekitten.com/150/150"},
		{photo_src: "http://placekitten.com/150/150"}
	]
});
*/




