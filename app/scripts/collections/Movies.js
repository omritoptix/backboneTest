/*global BackboneTest, Backbone*/

BackboneTest.Collections = BackboneTest.Collections || {};

(function () {
    'use strict';

    BackboneTest.Collections.Movies = Backbone.Collection.extend({

        model: BackboneTest.Models.Movie

    });

})();
