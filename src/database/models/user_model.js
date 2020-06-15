const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.pluralize(null);

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        //TODO: Make sure username is unique
    },
    password: {
        type: String,
        required: true,
        //TODO: Create validation
    }
})

//Hash the pasword using bcrypt (mongoose middleware)
userSchema.pre('save', async function(next){

    try {
        var hashedPassword = await bcrypt.hash(this.password, 4)
        this.password = hashedPassword;
    } catch (error) {
        console.log('Error has occured');
        
    }
    
    
    
    next()
})


var userModel = mongoose.model('users', userSchema)

module.exports = userModel;
