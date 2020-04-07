const path = require('path');
const consoleInfo = require('./console');
const resolve = dir => {
    return path.join(__dirname, dir)
};

module.exports = {
	baseUrl: './',
    lintOnSave: process.env.NODE_ENV !== 'production',
    filenameHashing: false,
    productionSourceMap: false,

}