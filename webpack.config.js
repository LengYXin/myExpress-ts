'use strict';

const webpack = require('webpack');
const Nodejs = require('./config/Node-webpack');
const React = require('./config/React-webpack');

module.exports = [Nodejs(__dirname), React(__dirname, true)];