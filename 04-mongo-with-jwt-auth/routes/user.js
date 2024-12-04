const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
   
  const username = req.body.username;
  const password = req.body.password;

  // check if a user with this username already exists

 await User.create({
      username : username,
      password : password
  })

  res.json({
     message : 'Admin created succesfully'
  })

});

router.post("/signin", async(req, res) => {
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

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    // Implement course purchase logic
    const user = await User.findOne({ username });
    if (user.purchasedCourses.includes(courseId)) {
        return res.status(400).json({ message: "Course already purchased" });
    }

    await User.updateOne(
        { username },
        {
            $push: {
                purchasedCourses: courseId,
            },
        }
    );

    res.json({
        message: "Purchase complete!",
    });
});


// router.get("/purchasedCourses", userMiddleware, (req, res) => {
//   // Implement fetching purchased courses logic
// });

module.exports = router;
