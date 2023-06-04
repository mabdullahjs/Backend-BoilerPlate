const express = require("express");

//controller function
const {
  addUser,
  getUser,
  deleteUser,
  updateUser,
  loginUser,
} = require("../controller/user");

const router = express.Router();

// addUser route
router.post("/", addUser);

//getAllUser route
router.get("/", getUser);
router.get("/:id", getUser);

//delete user route
router.delete("/:id", deleteUser);

//update user route
router.patch("/:id", updateUser);

//login route
router.post("/login",loginUser);

module.exports = router;