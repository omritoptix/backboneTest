/*global BackboneTest, Backbone*/

BackboneTest.Models = BackboneTest.Models || {};

(function () {
    'use strict';

    BackboneTest.Models.Movie = Backbone.Model.extend({
    	defaults : {
    		title:""
    	}

    });

})();
