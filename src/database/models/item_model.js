var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Disable collection pluralization
mongoose.pluralize(null);

var itemSchema = new Schema({
    itemName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    comments: {
        type: String,

    },
    price: {
        type: Number
    },
})

var itemModel = mongoose.model('inventory', itemSchema)

module.exports = itemModel