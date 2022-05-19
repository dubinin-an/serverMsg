const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const message = require('../models/message.js');

router.get('/', function(req, res, next) {
    message.find(function (err, messages) {
        if (err) return next(err);
        res.json(messages);
    });
});

module.exports = router;
