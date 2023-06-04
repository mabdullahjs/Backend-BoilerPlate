const express = require('express');
const {addInst , getOneInst , getInst, deleteInstitute, updateInstitute} = require('../controller/institute');

//route
const router = express.Router();

//addInst route
router.post('/' , addInst);

//getAllInst route
router.get('/' , getInst);

// get single Insttion
router.get("/:id", getOneInst);

// delete Course
router.delete("/:id", deleteInstitute);

// update  Course
router.patch("/:id",updateInstitute);



module.exports = router