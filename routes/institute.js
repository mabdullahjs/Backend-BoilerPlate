const express = require('express');
const {addInst , getOneInst , getInst} = require('../controller/institute');

//route
const router = express.Router();

//addInst route
router.post('/' , addInst);

//getAllInst route
router.get('/' , getInst);

// get single Insttion
router.get("/:id", getOneInst);



module.exports = router