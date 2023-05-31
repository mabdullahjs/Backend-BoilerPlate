const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

//signup method

userSchema.statics.signup = async function (
   userName,
   email,
   password
) {
    const exists = await this.findOne({ userName });
    if (exists) {
        throw Error("User Name already in use.");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        userName,
        email,
        password:hash
    });
    return user;
};

//login method

userSchema.statics.login = async function (userName, password) {
    if ((!userName, !password)) {
        throw Error("User Name and Password is Required");
    }

    //finding user in database
    const user = await this.findOne({ userName });
    if (!user) {
        throw Error("Incorrect Email");
    }

    //compairing password

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error("Incorrect password");
    }
    return user;
};

module.exports = mongoose.model("User", userSchema);