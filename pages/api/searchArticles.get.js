const { listArticles, getArticle } = require("../../helpers/db");

module.exports = (req, res) => {
  try {
    if (req.query.q == undefined || req.query.q == null)
      return res.status(400).json({ error: true });
    let q = req.query.q.toString().replaceAll(/^ +/g, "").replaceAll(/ +$/g, "");
    const articles = listArticles() || [];
    const titleMatches = articles.filter((el) => (el.title || "").includes(q));
    return res.json({
      error: false,
      articles: [...titleMatches].map(
        ({ title, img, slug }) => ({ title, img, slug })
      ),
    });
  } catch {
    res.status(500).json({ error: true });
  }
};
