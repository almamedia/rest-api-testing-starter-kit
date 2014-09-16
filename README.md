Supertest starter kit
=====================


[SuperTest](https://github.com/visionmedia/supertest) API testing with [Mocha](http://visionmedia.github.io/mocha/). This is a starter kit which you can copy to your own projects.


Installation
------------

- Requires [NodeJS](http://nodejs.org/) `v0.10` or newer

Install [Nodemon](http://nodemon.io/) and [Mocha](http://visionmedia.github.io/mocha/) globally:
```sh
npm install -g nodemon mocha
```

Install local depedencies:
```sh
npm install
```

Running the server and testing it
---------------------------------

Run the server:

```sh
npm start
```

### Test locally:

```sh
npm test
```

### Test on continuous integration

Set an environment variable `export CI=true` (note: e.g. Travis-CI [sets this automatically](http://docs.travis-ci.com/user/ci-environment/#Environment-variables)) in your continuous integration environment or just prepend the variable before the test command:

```sh
CI=true npm test
```
This outputs the test results as "standard-ish" [XUnit XML](http://en.wikipedia.org/wiki/XUnit).


Writing tests
-------------

Test suites must be stored in `./test/suites/`-folder. If you wish, you can also organize your test suites into folders (maximun 2 levels deep).

A test suite must exposed as CommonJS module function which takes the supertest's request object (in this case called `API`) as an argument. Suite must have at least one MochaJS `describe`-block inside them.

Here's an example structure:

```js
module.exports = function(API) {

  describe('Describe your test suite here', function() {
    it('should do something', function(done) {
      /* some tests */
    });
  });

}
```

See the provided examples [`root endpoint test`](test/suites/0-root.js) and [`collection test`](test/suites/collection/collection.js) for more examples.
