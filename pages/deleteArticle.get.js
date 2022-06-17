const { verifyToken, removeArticle } = require("../helpers/db");

module.exports = (req, res) => {
    if(req.query.slug && typeof req.query.slug == "string" && verifyToken(req.cookies?.auth)) {
        removeArticle(req.query.slug);
        res.redirect("/");
    }
};
