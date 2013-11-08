/*global BackboneTest, Backbone, JST*/

BackboneTest.Views = BackboneTest.Views || {};

(function () {
    'use strict';

    BackboneTest.Views.MovieView = Backbone.View.extend({

        template: JST['app/scripts/templates/Movie.ejs']

    });

})();
