const express = require('express');
const { addCourse, getOneCourse, getCourse, deleteCourse, updateCourse } = require('../controller/course');
const { protectToken } = require('../controller/user');

//route
const router = express.Router();

//addCourse route
router.post('/', addCourse);

//getAllCourse route
router.get('/', protectToken, getCourse);

// get single Coursetion
router.get("/:id", getOneCourse);

// delete Course
router.delete("/:id", deleteCourse);

// update  Course
router.patch("/:id", updateCourse);



module.exports = router