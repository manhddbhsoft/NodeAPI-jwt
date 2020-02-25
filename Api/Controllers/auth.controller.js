const User = require('../Models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    registerUser: async (req, res, next) => {

        //Check if email already exist
        var emailExist = await User.find({email: req.body.email});
        if (emailExist) return res.status(400).send('Email already exists!');

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(req.body.password, salt);

        //Create a new user
        const User = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        try {
            const savedUser = await User.save();
            res.status(200).send(savedUser);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    loginUser: async (req, res, next) => {

            var email = req.body.email;
            var password = req.body.password;
            //Check Email
            const findUser = await User.findOne({email: email});
            if (!findUser) 
                return res.status(400).send('Email does not exists!');
            //Check Password
            const validPass = await bcrypt.compare(password, findUser.password);
            if (!validPass)
                return res.status(400).send('Invalid password!');

            res.status(200).json({
                message: 'Login successful!'
            });

            //Create and assign a token
            const token = jwt.sign({_id: findUser._id}, process.env.TOKEN_SECRET);
            res.header('auth-token', token);
            next();
    }
}