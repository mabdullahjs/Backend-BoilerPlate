const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    duration: {
        type: String,
        required:true
    },
    fees: {
        type: Number,
        required:true
    },
    shortName: {
        type: String,
        required:true
    }
});



module.exports = mongoose.model("Course", courseSchema);
