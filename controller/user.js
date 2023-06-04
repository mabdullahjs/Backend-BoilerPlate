const User = require("../models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

//creating jwt token

const createToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: "3d" });
};

// post request of add user

const addUser = async (req, res) => {
    const {
        userName,
        email,
        password
    } = req.body;
    try {
        const user = await User.signup(
            userName,
            email,
            password
        );

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Get request of all users

const getUser = async (req, res) => {
    let id = req.params.id;
    let users;
    if (id) {
        users = await User.find({ _id: id });
    } else {
        users = await User.find({});
    }
    res.status(200).json(users);
};

// delete user route

const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(401).json({ error: "No such user" });
    }

    const users = await User.findOneAndDelete({ _id: id });

    if (!users) {
        return res.status(401).json({ error: "No such user" });
    }

    res.status(200).json(users);
};

// update user route

const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ error: "No such user" });
    }

    const users = await User.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!users) {
        return res.json({ error: "No such user" });
    }

    res.json(users);
};

//post req of login user

const loginUser = async (req, res) => {
    const { userName, password } = req.body;
    let arr = [];
    if (!userName || userName == " ") {
        arr.push("Required: User Name");
    }
    if (!password || password.length < 6) {
        arr.push(
            !password
                ? "Required: Password"
                : "Password Should be atleast 6 characters."
        );
    }

    if (arr.length > 0) {
        res.status(400).json(arr);
    } else {
        try {
            const user = await User.login(userName, password);

            //create jsonwebtoken

            const token = createToken(user);
            res.status(200).json({ user: user, token });
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
};

const protectToken = async (req, res, next) => {
    let token = req.headers.authorization;
    jwt.verify(token.split(' ')[1], process.env.SECRET, (err, decoded) => {
        if (err) {
            res.json('error occured')
            console.log('decodes===>', decoded)
            console.log('token===>', token)
        }
        else {
            console.log(decoded)
            next()
        }
    })
}

module.exports = { addUser, getUser, deleteUser, updateUser, loginUser, protectToken };