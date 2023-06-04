const express = require('express');
const {addStudent , getOneStudent , getStudent, deleteStudent, updateStudent} = require('../controller/student');

//route
const router = express.Router();

//addStudent route
router.post('/' , addStudent);

//getAllStudent route
router.get('/' , getStudent);

// get single Studenttion
router.get("/:id", getOneStudent);

// delete Course
router.delete("/:id", deleteStudent);

// update  Course
router.patch("/:id",updateStudent);



module.exports = router