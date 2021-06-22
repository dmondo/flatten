# Flatten/Unflatten

Flatten and unflatten are JavaScript utility functions that allow you to translate an object between flat and nested representations.

Note that these functions make some assumptions about the object being flattened/unflattened: keys are delimited by a period ```'.'```, array keys are numeric, and object keys are alphanumeric (exclusively: they cannot be purely numeric as otherwise there is no way to distinguish an array from an object).

## Repo Organization

```flattenObject``` is exported from ```flatten.js``` in the ```flatten``` directory.
```unflattenObject``` is exported from ```unflatten.js``` in the ```unflatten``` directory.

Both flatten and unflatten directories contain unit tests, which can be run via ```npm test``` in the command line.

Sample data used by these tests lives in ```constants.js``` in the ```constants``` directory.

## To Run Locally

Install dependencies,
<pre><code>> npm install </code></pre>

Note that we require jest to run the tests, and babel so that we can use ES6+ module syntax, but those are our only dependencies--so this should be a lightweight and quick install.

Run tests,
<pre><code>> npm test </code></pre>

See ```package.json``` for the jest command that this invokes. Running the tests will find all test files in the repo and run them automatically.