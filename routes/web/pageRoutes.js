'use strict';

const { appName } = include('/resources/bootstrap/app');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { appName });
});

router.get('*', (req, res) => {
    res.status(404).render('404', { appName });
});

module.exports = router;