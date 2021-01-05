cordova.define("info.androidabcd.plugins.custom.CordovaCustomPlugin", function(require, exports, module) {
function Add() {

}

Add.prototype.coolMethod = function (dataToSend, successCallback, errorCallback) {
 //alert("Plugin method called");
  cordova.exec(successCallback, errorCallback, 'CordovaCustomPlugin', 'coolMethod',dataToSend);
};

Add.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.add = new Add();
  return window.plugins.add;
};

cordova.addConstructor(Add.install);

//var exec = require('cordova/exec');
//  alert("Plugin loaded");
//exports.coolMethod = function (arg0, success, error) {
//    alert("Plugin method called");
//    exec(success, error, 'CordovaCustomPlugin', 'coolMethod', [arg0]);
//};

});

// alert("Plugin loaded");

//Send Data Plugin
//IdNowPlugin.prototype.coolMethod = function (dataToSend, successCallback, errorCallback) {
// alert("Plugin method called");
//  cordova.exec(successCallback, errorCallback, 'CordovaCustomPlugin', 'coolMethod',[dataToSend]);
//};

