const express = require('express');
const multer = require('multer');
const imageController = require('../controller/uploadImg');

const router = express.Router();

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), imageController.uploadImage);

module.exports = router;