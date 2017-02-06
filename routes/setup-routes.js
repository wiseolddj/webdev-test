var config = require('../config/config');
var express = require('express');
var path = require('path');

var configureRoutes = {

    init: function(app) {

        /********* Products List Routes ***********/
        var productListApiRoute = require(config.ROOT + '/routes/product-list');
        productListApiRoute.routes.init(app);

        /********* Product Routes ***********/
        var productApiRoute = require(config.ROOT + '/routes/product');
        productApiRoute.routes.init(app);

		app.use(express.static(path.join(__dirname, 'public')));

        /********* Landing Page Routes ***********/
        var landingPageRoute = require(config.ROOT + '/routes/landing-page');
        landingPageRoute.routes.init(app);


    }
};

module.exports = {
    configureRoutes: configureRoutes
};