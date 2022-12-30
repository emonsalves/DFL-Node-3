const router = require('express').Router();
const express = require("express")
const path = require('path');

router.use(require('./database'));

router.use(express.static(path.join('public')));

router.use(require('./notfound'));

module.exports = router;