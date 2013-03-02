/**
 * Module dependencies
 */
var mongoose = require('mongoose');

/**
 * Vars
 */
var Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    Mixed = Schema.Types.Mixed;

/**
 * Module Exports
 */
exports.toJSON = toJSON;
exports.fromJSON = fromJSON;

/**
 * Convert a Mongoose Schema Definition to a JSON string
 *
 * @param {Object} definition
 * @returns {String}
 * @api public
 */
function toJSON(definition) {
    return JSON.stringify(definition, function (key, value) {
        switch (type(value)) {
            case 'String': return 'string';
            case 'Date': return 'date';
            case 'Number': return 'number';
            case 'Boolean': return 'boolean';
            case 'Buffer': return 'buffer';
            case 'ObjectId': return 'objectid';
            case 'Mixed': return 'mixed';
            case 'now': if (key === 'default') return 'Date.now'; // TODO: More reliable way...
        }
        return value;
    });
}

/**
 * Get a Schema Definition object from JSON
 *
 * @param {Object|String} json
 * @returns {Object}
 * @api public
 */
function fromJSON(json) {
    if (typeof json !== 'string')
        json = toJSON(json);

    return JSON.parse(json, function (key, value) {
        switch (value) {
            case 'string': return String;
            case 'date': return Date;
            case 'number': return Number;
            case 'boolean': return Boolean;
            case 'buffer': return Buffer;
            case 'objectid': return ObjectId;
            case 'mixed': return Mixed;
            case 'Date.now': return Date.now;
        }
        return value;
    });
}

/**
 * Gets native or Mongoose SchemaType name from obj
 *
 * @param {Object} obj
 * @returns {String}
 * @api private
 */
function type(obj){
    if (typeof obj !== 'function') return obj;
    var text = obj.toString();
    return text.match(/function (.*)\(/)[1];
}
