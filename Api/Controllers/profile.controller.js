const Profile = require('../Models/user.model');

module.exports = {

    getProfile: (req, res, next) => {
        try{
            //this.loginUser();
            //console.log(req.params.username);
            Profile.findOne({username: req.params.username})
                .then(profile => {
                    res.status(200).json(profile);
                })
                .catch(err => {
                    res.status(401).json('Unauthorized');
                })
        }catch (error) {
            return res.status(422).json(error);
        }
    },

    follow: (req, res, next) => {
        try {
            Profile.findOneAndUpdate({username: req.params.username}, {following: true})
                .then(() => {
                    res.status(200).json({
                        message: 'Follow succesful!'
                    });
                })
                .catch(error => {
                    res.status(401).json('Unauthorized');
                })
        } catch (error) {
            return res.status(422).json(error);
        }
    },

    unfollow: (req, res, next) => {
        try {
            //this.loginUser();
            User.findOneAndUpdate({username: req.params.username}, {following: false})
            .then(() => {
                res.status(200).json({
                    message: 'Follow succesful!'
                });
            })
            .catch(error => {
                res.status(401).json('Unauthorized');
            })
        } catch (error) {
            return res.status(422).json(error);
        }
    }
}