'use strict';

const webpack = require('webpack');
const Nodejs = require('./config/Node-webpack');
const React = require('./config/React-webpack');

module.exports = [
    // nodejs  打包配置
    // Nodejs(__dirname),
    /**
     * react   打包配置
     * 参数 1  根路径 
     * 参数 2  是否压缩
     */
    React(__dirname)
];