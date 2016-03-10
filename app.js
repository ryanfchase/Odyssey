var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');


var db = require('./config/db');
mongoose.connect(db.url);

// 1. configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// 2. use middleware
app.use(express.static(path.join(__dirname, 'bower_components')));

/* BODY-PARSER
 *  get all data/stuff of the body (POST) parameters
 *  parse application/json 
 */
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// 3. define routes

app.use('/todo', require('./todo'));
app.use('/login', require('./controllers/login.controller'));
app.use('/register', require('./controllers/register.controller'));

// make '/login' default route
app.get('/', function (req, res) {
    return res.redirect('/login');
});

app.listen(1337, function() {
	console.log('ready on port 1337');
});


// var http = require('http');

// var hostname = '127.0.0.1';
// var port = 1337;

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });