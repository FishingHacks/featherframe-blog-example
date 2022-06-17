const {urlencoded} = require("body-parser");

module.exports = urlencoded({
    extended: false
});