var express = require('express')
var router = express.Router()
var userModel = require('../../database/models/user_model')
var issueJWT = require('./jwt_token')

//Create a new user
router.post('/new', async (req, res) => {
    try {

        //Save user to the database
        var newUser = new userModel(req.body);
        await newUser.save();


        //Return a JWT token with payload including username and database id
        var token = issueJWT.issue_jwt(newUser.username, newUser._id)
        
        res.send(token);
        

    } catch (error) {
        console.log(error);
    }
})

//Authenticate a user




module.exports = router;