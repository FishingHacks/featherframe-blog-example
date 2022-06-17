const { resetToken, verifyToken } = require("../helpers/db");

module.exports = (req, res) => {
    resetToken(req.cookie?.auth);
    res.clearCookie("auth");
    res.redirect("back");
}