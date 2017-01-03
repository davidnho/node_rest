//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://localhost:27017/rest_test');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// app.get('/',function(req,res){
// 	res.send('working');
// });

//Routes
app.use('/api',require('./routes/api'));

//Start server
app.listen(3000);
console.log('API is running on port 3000');