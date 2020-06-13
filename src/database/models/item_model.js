var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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
    price: {
        type: Number
    },
})

var itemModel = mongoose.model('inventory', itemSchema)

module.exports = itemModel