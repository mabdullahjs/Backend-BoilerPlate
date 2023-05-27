const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    course: {
        type: String,
        required:true
    },
    contact: {
        type: Number,
        required:true
    }
});



module.exports = mongoose.model("Teacher", teacherSchema);
