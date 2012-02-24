
/**
 * Module dependencies.
 */

var express = require('express');
var io = require('socket.io');
var app = express.createServer();
var io = io.listen(app);

var port = process.env.PORT || 3000;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});

// Sockets

var count = 0;

io.sockets.on('connection', function (socket) {

  socket.on('hover', function (msg) {
    count++;
    var resp = 'Processed hover event on ' + msg + '. Event #' + count;
    socket.emit('data', resp);
  });
  
});

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
