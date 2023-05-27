const express = require('express');
const {addCourse , getOneCourse , getCourse} = require('../controller/course');

//route
const router = express.Router();

//addCourse route
router.post('/' , addCourse);

//getAllCourse route
router.get('/' , getCourse);

// get single Coursetion
router.get("/:id", getOneCourse);



module.exports = router