const express = require('express');
const controller = require('../constroller/paginasControllers')
const route = express.Router();

module.exports  = function (){
    route.get('/', controller.home);
    route.get('/producto', controller.tienda);
    route.get('/nosotros', controller.nosotros);
    return route;
}




