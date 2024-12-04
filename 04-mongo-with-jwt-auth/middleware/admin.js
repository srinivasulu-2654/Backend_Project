// Middleware for handling auth
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization // actually here we used to start with capital letters in postman but coming to this we have to write in small letters only bearer token
    const words = token.split(" "); // ["Bearer","token"]
    const jwttoken = words[1]; //token

    try{
    const decodedValue = jwt.verify(jwttoken,JWT_SECRET);  // check 1:43:50
    // the use of jwt tokens are we can save the again and again DB calls by sending username and password
    if(decodedValue.username){
        next();
    }
    else{
        res.status(403).json({
            message : "You are not authenticated"
        })
    }
  } catch(e) {
    res.json({
        msg:"Incorrect inputs"
    })
  }
}

module.exports = adminMiddleware;