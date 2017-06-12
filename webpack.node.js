'use strict';

const webpack = require('webpack');
const Nodejs = require('./config/Node-webpack');
const React = require('./config/React-webpack');

module.exports = [
    // nodejs  打包配置
    Nodejs(__dirname),
];