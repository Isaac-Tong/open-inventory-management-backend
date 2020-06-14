const itemModel = require('../../database/models/item_model')
const mongoose = require('mongoose');

var express = require('express')
var router = express.Router()



//Add a new item to the inventory
router.post('/', async (req, res) => {
    try {
        var newItem = new itemModel(req.body)
        await newItem.save()
        res.send(newItem)
    } catch (error) {
        res.status(500).send('Error adding new item')
    }
})

//Retrieve routes
router.get('/', async (req, res) => {
    try {
        var hello = await itemModel.findById('5ee4d9f103f8d32fd040e2b4')
        res.send(hello)
        console.log('Router hit');
    } catch (error) {
        console.log(error);
    }
})


module.exports = router