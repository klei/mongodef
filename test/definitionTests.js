var should = require('chai').should(),
    Schema = require('mongoose').Schema,
    definition = require('../src/definition');

var schemaJSON = require('./schema.json'),
    schemaDefinition = require('./schemaDefinition');

describe('klei-mongodef', function() {
    describe('toJSON', function () {
        it('should convert a Mongoose Schema Definition to JSON', function (done) {
            var json = definition.toJSON(schemaDefinition);
            json.should.equal(JSON.stringify(schemaJSON));
            done();
        });
    });

    describe('fromJSON', function () {
        it('should convert JSON to a Mongoose Schema Definition', function (done) {
            definition.fromJSON(schemaJSON).should.deep.equal(schemaDefinition);
            done();
        });

        it('should not touch a Mongoose Schema Definition', function (done) {
            definition.fromJSON(schemaDefinition).should.deep.equal(schemaDefinition);
            done();
        });
    });
});
