/*global BackboneTest, Backbone*/

BackboneTest.Models = BackboneTest.Models || {};

(function () {
    'use strict';

    BackboneTest.Models.Category = Backbone.Model.extend({
    	defaults : {
    		title:''
    	}
    });

})();
