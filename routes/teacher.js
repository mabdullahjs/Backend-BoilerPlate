const express = require('express');
const {addTeacher , getOneTeacher , getTeacher} = require('../controller/teacher');

//route
const router = express.Router();

//addTeacher route
router.post('/' , addTeacher);

//getAllTeacher route
router.get('/' , getTeacher);

// get single Teachertion
router.get("/:id", getOneTeacher);



module.exports = router