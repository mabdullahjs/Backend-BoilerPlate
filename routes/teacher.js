const express = require('express');
const {addTeacher , getOneTeacher , getTeacher, deleteTeacher, updateTeacher} = require('../controller/teacher');

//route
const router = express.Router();

//addTeacher route
router.post('/' , addTeacher);

//getAllTeacher route
router.get('/' , getTeacher);

// get single Teachertion
router.get("/:id", getOneTeacher);
// delete Course
router.delete("/:id", deleteTeacher);

// update  Course
router.patch("/:id",updateTeacher);



module.exports = router