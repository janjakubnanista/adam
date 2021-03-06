var path = require('path');

var env = process.env.NODE_ENV || 'production';
var isProduction = env === 'production';

module.exports = {
    HOST: process.env.OPENSHIFT_NODEJS_IP || 'localhost',
    PORT: process.env.OPENSHIFT_NODEJS_PORT || 8080,

    PUBLIC_DIR: path.join(__dirname, 'public'),
    BUILD_DIR: path.join(__dirname, 'build'),
    SASS_SRC_DIR: path.join(__dirname, 'src/scss'),
    SASS_BUILD_DIR: path.join(__dirname, 'build/css'),
    JS_SRC_DIR: path.join(__dirname, 'src/js'),
    JS_BUILD_DIR: path.join(__dirname, 'build/js'),

    COMPRESS_CSS: isProduction,
    COMPRESS_JS: isProduction,
    ENV: env
};
