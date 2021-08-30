'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join('./', 'views'));

module.exports = {
    port: port, 
    app: app 
}