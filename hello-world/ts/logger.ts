
module.exports = function(msg: string) {
    console.log(msg);
}


// another file
let logger = require("./logger.js");

let logr = require(logger.js);