const jwt = require('jsonwebtoken');
require('dotenv').config()


//Issue a token
function issue_jwt(user, db_id){
    var token = jwt.sign({username: user, id: db_id}, process.env.JWT_SECRET)
    return token;
}

module.exports.issue_jwt = issue_jwt;