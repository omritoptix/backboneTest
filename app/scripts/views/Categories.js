/*global BackboneTest, Backbone, JST*/

BackboneTest.Views = BackboneTest.Views || {};

(function () {
    'use strict';

    BackboneTest.Views.Categories = Backbone.View.extend({

        template: JST['app/scripts/templates/Categories.ejs'],

        events : {
        	'pagehide' : 'onPageHide'
        },

        //since jquery mobile is not in charge of routing anymore
        //have to manually remove the pages from the DOM
        onPageHide : function(event,ui) {
        	$(event.currentTarget).remove();
        },


        render : function(category) {
			this.$el.append(this.template({categories : this.collection.models})).trigger('create');


			return this;
        }

    });

})();
