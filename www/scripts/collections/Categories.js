/*global BackboneTest, Backbone*/

BackboneTest.Collections = BackboneTest.Collections || {};

(function () {
    'use strict';

    BackboneTest.Collections.Categories = Backbone.Collection.extend({

        model: BackboneTest.Models.Category

    });

})();
