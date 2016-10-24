var express = require('express');
var methodOverride = require('method-override');
var morgan = require('morgan');
var routes = require('./routes');
var api = require('./routes/api');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./config');

var app = module.exports = express();

///////////////////
// Configuration //
///////////////////

// all environments
app.set('port', config.port);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(methodOverride());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

////////////
// Routes //
////////////

// Serve index
app.get('/', routes.index);

// APIs
app.get('/api/phone/current-queue', api.getCurrentPhoneQueue);
app.get('/api/phone/historical-queue', api.getHistoricalPhoneQueue);
app.get('/api/phone/agents', api.getAgentsActivity);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});
