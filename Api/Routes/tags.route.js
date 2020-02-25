//Import indepencies
const express = require('express');
const router = express.Router();

//Import tag controller
const controller = require('../Controllers/tag.controller');

//Content
router.get('/', controller.getByTag);

//Export module
module.exports = router;