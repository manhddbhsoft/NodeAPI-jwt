const User = require('../Models/user.model');

module.exports = {
    
    getUser: (req, res, next) => {
        try{
            //this.loginUser();
            User.find({})
            .then(users => {
                res.status(200).json(users);
            })
            .catch(err => {
                res.status(401).json('Unauthorized');
            })
        }catch (error) {
            return res.status(422).json(error)
        }
    },

    newUser: (req, res, next) => {
        const newUser = new User(req.body);
        newUser.save()
            .then(user => {
                res.status(201).json(user);
            })
            .catch(err => {
                res.status(422).json({
                    message: 'Unexpected error!'
                });
            });
    },

    updateUser: (req, res, next) => {
        try {
            //this.loginUser();
            User.findOneAndUpdate({email: req.body.email}, req.body)
            .then(user => {
                res.status(200).json(user);
            })
            .catch(err => {
                res.status(422).json({
                    message: 'Unexpected error!'
                });
            });
        } catch (error) {
            return res.status(422).json(error);
        }
    }
}