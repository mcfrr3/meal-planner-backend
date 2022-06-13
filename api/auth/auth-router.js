const express= require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../secrets')

const Users= require('../users/users-model')

router.post('/register', (req, res) => {

})

module.exports= router