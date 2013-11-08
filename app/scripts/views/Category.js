/*global BackboneTest, Backbone, JST*/

BackboneTest.Views = BackboneTest.Views || {};

(function () {
    'use strict';

    BackboneTest.Views.Category = Backbone.View.extend({

        template: JST['app/scripts/templates/Category.ejs']

    });

})();
