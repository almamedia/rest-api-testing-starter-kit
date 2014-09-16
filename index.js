
// BASE SETUP
// =============================================================================

// call the packages we need
var express     = require('express');// call express
var app         = express();         // define our app using express
var bodyParser  = require('body-parser');
var os          = require('os');
var chalk       = require('chalk');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;    // set our port
var apiUrl = 'http://'+os.hostname()+':'+port+'/api';

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();        // get an instance of the express Router

// Root endpoint
router.get('/', function(req, res) {
  res.json({ message: 'Hello World!' });
});

// Some collection
router.get('/collection', function(req, res) {
  res.json([
    {
      id: 1,
      name: 'Item 1'
    },
    {
      id: 2,
      name: 'Item 2'
    }
  ]);
});

// Catch all route (so if no route is found, return 404)
router.all('*', function(req, res) {
  res.status(404);
  res.json({ message: 'Not found!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(chalk.cyan('\nExample server running at '+chalk.underline(apiUrl)));
console.log(chalk.gray('Press CTRL+C to stop'));
