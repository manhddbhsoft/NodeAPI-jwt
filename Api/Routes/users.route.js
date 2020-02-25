//Import indepencies
const express = require('express');
const router = express.Router();
const login = require('../Controllers/auth.controller');
//Import userController
const controller = require('../Controllers/user.controller');
const authRequire = require('../Helpers/verifyToken');

//Content
router.post('/login', login.loginUser);
router.post('/register', login.registerUser);
router.get('/', controller.getUser);
router.post('/', authRequire, controller.newUser);
router.put('/update', authRequire, controller.updateUser);
//Export module
module.exports = router;