var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    users = require('./routes/user'),
    app = express();

    app.use('/users', users);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.listen(3000, function(err) {
      if (err) { return console.log(err.message);}
      console.log('Server running');
    })