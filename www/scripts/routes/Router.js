/*global BackboneTest, Backbone*/

BackboneTest.Routers = BackboneTest.Routers || {};

(function () {
    'use strict';

    BackboneTest.Routers.Router = Backbone.Router.extend({
    	routes: {
    		"":"categories",
    		"1":"category",
    		"categories?:type" : "category",
    		"*actions": "defaultAction"
    	},

    	initialize:function () {
        // Handle back button throughout the application
/*        $('.back').live('click', function(event) {
            window.history.back();
            return false;
        });*/
        this.firstPage = true;
    	},

    	defaultAction : function () {
    		this.categories();
    	},

    	categories : function() {
    		var categoriesCollection = [
			{title:'Movies'},
			{title:'Bars'},
			{title:'Sports'},
			{title:'Cinema'}
			];

			var categoriesView = new BackboneTest.Views.Categories({collection : new BackboneTest.Collections.Categories(categoriesCollection)});
	    	this.changePage(categoriesView);
	    	},

	    category : function(type) {
	    	if (type == "Movies") {
	    		this.movies();
	    	}
	    },

	    movies : function() {
	    	var moviesCollection = [
			{title:'Thor'},
			{title:'Captain Phillips'},
			{title:'Djano'},
			{title:'XXX'}
			];

			var moviesView = new BackboneTest.Views.Movies({collection : new BackboneTest.Collections.Movies(moviesCollection)});
	    	this.changePage(moviesView);
	    },

    	changePage : function (page) {
    		//add the attribute ‘data-role=”page” ‘ for each view’s div 
	        $(page.el).attr('data-role', 'page');
	        page.render();
	        //append to dom 
	        $('body').append($(page.el));
	        var transition = $.mobile.defaultPageTransition;
	        // We don't want to slide the first page
	        if (this.firstPage) {
	            transition = 'none';
	            this.firstPage = false;
	        }
	        console.log(transition);
        	$.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    	}

    });

   /* //instantiate the router
    BackboneTest.routes = new BackboneTest.Routers.Router;

    //categories route
    BackboneTest.routes.on('route:categories', function() {
    	// // Programatically changes to the categories page
     //        $.mobile.changePage( "#categories" , { reverse: false, changeHash: false } );
		// add data here and pass it
		var categoriesCollection = [
		{title:'Movies'},
		{title:'Bars'},
		{title:'Sports'},
		{title:'Cinema'}
		];

		new BackboneTest.Views.Categories({collection : new BackboneTest.Collections.Categories(categoriesCollection)});
		// new CategoriesView({collection : new Category(category)});

	  
	});

	BackboneTest.routes.on('route:category', function(categoryType) {
		debugger;
		console.log(categoryType);
	});*/


})();
