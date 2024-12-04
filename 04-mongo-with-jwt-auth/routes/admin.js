const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course, } = require("../db");
const router = Router();
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists

   await Admin.create({
        username : username,
        password : password
    })

    res.json({
       message : 'Admin created succesfully'
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    
    const username = req.body.username;
    const password = req.body.password;

    console.log(JWT_SECRET);

    const user = await User.find({
        username,
        password
    })

    if(user) {

        const token = jwt.sign({
            username,
        },JWT_SECRET);
    
        res.json({
            token
        })
    } else {
        res.status(411).json({
            message:"Incorrect email and password"
        })
    }

    

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // zod

   const newCourse = await Course.create({    // this is also same as title : title -> this.title
        title,
        description,
        imageLink,
        price
    })
   
    res.json({
        message : 'Course Successfully created', courseId: newCourse._id
    })
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({}) // it will give all the existing courses

    res.json({
        courses : response
    })
});

module.exports = router;