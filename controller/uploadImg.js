const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const Image = require('../models/uploadImg');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadImage = async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    try {
      const uploadResult = await cloudinary.uploader.upload(req.file.path);
  
      fs.unlinkSync(req.file.path);
  
      const newImage = new Image({
        name: req.file.originalname,
        imageUrl: uploadResult.secure_url,
      });
  
      const savedImage = await newImage.save();
  
      res.status(200).json(savedImage);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong with image upload and saving' });
    }
  };

module.exports = { uploadImage };
