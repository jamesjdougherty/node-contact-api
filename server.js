var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Contact = require('./api/models/contact'), //created model loading here
  bodyParser = require('body-parser');
  
// connect Mongoose to your DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Contactdb');
// mongoose.connect('mongodb://localhost/Contactdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('contact-api RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
