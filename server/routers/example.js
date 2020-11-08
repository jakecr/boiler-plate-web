const express = require('express')
const Example = require('../models/Example')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const router = new express.Router()

// Learn from user router and api -- These are very specific to what example really is

module.exports = router