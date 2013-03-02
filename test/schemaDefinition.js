var types = require('mongoose').Schema.Types,
    ObjectId = types.ObjectId,
    Mixed = types.Mixed;

module.exports = {
    _id: {type: ObjectId},
    name: {type: String},
    field1: {type: Number, 'default': 0},
    field2: String,
    date: {type: Date, 'default': Date.now},
    booleans: [Boolean],
    items: [{name: {type: String}}],
    any: {type: Mixed}
};
