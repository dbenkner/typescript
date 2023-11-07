"use strict";
module.exports = function (msg) {
    console.log(msg);
};
// another file
let logger = require("./logger.js");
let logr = require(logger.js);
