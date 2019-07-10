const express = require("express");
const router = express.Router();

const { signup, signin, signout, requireSignin } = require("../controllers/auth");
const { userSignupValidator, userSigninValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", userSigninValidator, signin);
router.get("/signout", signout);

// testing for requireSignin middileware
// public route
// router.get("/test", (req, res) => {
//     res.send("Hello there")
// });

// protected route
// router.get("/test1", requireSignin, (req, res) => {
//     res.send("Hello there")
// })

module.exports = router;