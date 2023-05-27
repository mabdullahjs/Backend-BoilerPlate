const express = require('express');
const {addStudent , getOneStudent , getStudent} = require('../controller/student');

//route
const router = express.Router();

//addStudent route
router.post('/' , addStudent);

//getAllStudent route
router.get('/' , getStudent);

// get single Studenttion
router.get("/:id", getOneStudent);



module.exports = router