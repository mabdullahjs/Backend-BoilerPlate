const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instituteSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    shortName: {
        type: String,
        required:true
    },
    tel: {
        type: Number,
        required:true
    }
});



module.exports = mongoose.model("Institute", instituteSchema);
