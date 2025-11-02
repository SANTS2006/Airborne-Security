const express = require('express');
const router = express.Router();

const {postMessage} = require('../controllers/AirborneContactMessageControllers');

router.post('/contactMessage', postMessage);

module.exports = router;