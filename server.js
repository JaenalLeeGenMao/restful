var express = require('express');
var restful = require('node-restful');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
app.use(bodyParser());
app.use(methodOverride());

mongoose.connect('mongodb://localhost/restful');

var ProductSchema = mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

var Products = restful.model('products', ProductSchema);
Products.methods(['get', 'post', 'put', 'delete']);
Products.register(app, '/api/products');

app.listen(3000);
console.log('server is running at port 3000');
