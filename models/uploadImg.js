const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadImg = new Schema({
    name: String,
    imageUrl: String,
});

module.exports = mongoose.model("UploadImg", uploadImg);
