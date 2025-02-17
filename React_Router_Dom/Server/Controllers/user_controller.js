const User = require("../Models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createUser = async (req, res) => {
    const { email, password } = req.body;
    let isexist = await User.findOne({ email: email });
    try {
        if (isexist) {
            return res.send("User already exists");
        } else {
            let has = await bcrypt.hash(password, 10);
            req.body.password = has;
            let user = await User.create(req.body);

            let token = await jwt.sign({
                id: user._id,
                username: user.username,
                role: user.role,
            }, process.env.key);
            return res.status(201).json({ user, token });
        }
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    try {
        if (!user) {
            return res.status(404).send("User not found");
        }
        let valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(401).send("Invalid password");
        }
        let token = await jwt.sign({
            id: user._id,
            username: user.username,
            role: user.role,
        }, process.env.key);
        res.json({ message: "Logged in successfully", token: token })

    } catch (error) {
        res.status(500).send({ error: error });
    }
};

exports.getAllUsers = async (req, res) => {
    const { role } = req.query;
    let query = {};
    if (role) {
        query.role = role;
    }
    let users = await User.find(query);
    res.status(200).send(users);
};