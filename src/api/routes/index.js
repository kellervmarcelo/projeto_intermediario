const express = require('express');
const route = express.Router();
const langs = require('./langs');
const charts = require('./charts');

route.use('/langs', langs);
route.use('/charts', charts);

module.exports = route;