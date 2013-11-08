/*global BackboneTest, $*/


window.BackboneTest = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    // init: function () {
    //     'use strict';
    //     console.log('Hello from Backbone!');

    // }
};

$(document).ready(function () {
    'use strict';
    // BackboneTest.init();
    // window.Utils = Utils;
    /*var routes = Routes;*/
    // BackboneTest.Routes = new BackboneTest.Routers.Router();
    var router = new BackboneTest.Routers.Router; 
    Backbone.history.start();
});
