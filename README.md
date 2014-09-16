API testing starter kit
=======================


Installation
------------

Install Nodemon and Mocha globally:
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
