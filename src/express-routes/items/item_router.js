const itemModel = require('../../database/models/item_model')
const mongoose = require('mongoose');

var express = require('express')
var router = express.Router()


//Retrieve routes
router.get('/', async (req, res) => {

    try {
    } catch (error) {
        console.log(error);
    }
    
    res.send('Saved')
})


module.exports = router