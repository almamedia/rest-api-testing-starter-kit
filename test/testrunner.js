// TODO
// REST API Tests
// MochaJS + Chai + SuperAgent


/*
 * Require modules
 * -----------------------------------------------------------------------------
 */
var fs          = require('fs');
var path        = require('path');
var should      = require('chai').should();
var request     = require('supertest');
var _           = require('lodash');
var os          = require('os');

/*
 * Configure the API endpoint
 * -----------------------------------------------------------------------------
 */
var port = process.env.PORT || 8080;    // set our port
var API = request('http://'+os.hostname()+':'+port+'/api');


/*
 * Binary parser
 * -----------------------------------------------------------------------------
 * - From http://stackoverflow.com/a/14802413
 */
function binaryParser(res, callback) {
  res.setEncoding('binary');
  res.data = '';
  res.on('data', function (chunk) {
    res.data += chunk;
  });
  res.on('end', function () {
    callback(null, new Buffer(res.data, 'binary'));
  });
}


/*
 * Require all test suites
 * -----------------------------------------------------------------------------
 * - uses https://www.npmjs.org/package/require-directory
 */
var suites = require('./suites');



/*
 * Check that there are some tests to be run
 * -------------------------------------------------------------------------
 */
if(Object.keys(suites).length<1) throw new Error('No test suites found.');

/*
 * Run all test suites recursively
 * -------------------------------------------------------------------------
 * - Actually generates the test suites runtime
 * - TODO: figure out some "more classy" way of looping the nested tests...
 */
describe('JSON HTTP REST API tests', function() {

  _.each(suites, function(suite){
    if (typeof suite === 'function') return suite(API);
    _.each(suite, function(suiteItem){
      if (typeof suiteItem === 'function') return suiteItem(API);
      _.each(suiteItem, function(suiteSubItem){
        if (typeof suiteSubItem === 'function') return suiteSubItem(API);
      });
    });
  });

});
