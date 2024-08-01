const express = require('express');
const router = express.Router(); 

const {getProfile, createProfile} = require('../controller/profile');


router.post('/createProfile',createProfile)

router.get('/getProfile',getProfile)

module.exports = router;