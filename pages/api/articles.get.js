const { listArticles } = require("../../helpers/db");

module.exports = (req, res) => res.json((listArticles() || []).slice(0, 18).map(el=>el.slug || ""));