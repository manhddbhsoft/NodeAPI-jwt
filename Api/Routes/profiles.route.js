//Import indepencies
const express = require('express');
const router = express.Router();

//Import userController
const controller = require('../Controllers/profile.controller');

//Content
router.get('/:username', controller.getProfile);
router.post('/:username/follow', controller.follow);
router.post('/:username/delete', controller.unfollow);
//Export module
module.exports = router;