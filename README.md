klei-mongodef
=============

`klei-mongodef` is a utility library for working with [Mongoose](http://mongoosejs.com) Schema definitions.

The library can convert a Mongoose Schema definition to JSON or the other way around, which is useful for sending schema definitions via e.g. a REST API or Websockets.

## Installation

Install `klei-mongodef` with npm:

```bash
npm install klei-mongodef
```

## Usage

```javascript
var mongodef = require('klei-mongodef');
```

### Public Methods

#### toJSON

Convert a Mongoose Schema Definition to a JSON string

 * **@param** *{Object}* definition
 * **@returns** *{String}*

#### fromJSON

Get a Schema Definition object from JSON

 * **@param** *{Object|String}* json
 * **@returns** *{Object}*


## Unit tests

Make sure the dev-dependencies are installed, and then run:

```bash
npm test
```

## Contributing

`klei-mongodef` uses the [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/) branching model so make your pull requests to the `develop` branch.