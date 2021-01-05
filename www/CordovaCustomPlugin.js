var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'CordovaCustomPlugin', 'coolMethod', [arg0]);
};

exports.SelectFile = function (arg0, success, error) {
    exec(success, error, 'CordovaCustomPlugin', 'SelectFile', [arg0]);
};
