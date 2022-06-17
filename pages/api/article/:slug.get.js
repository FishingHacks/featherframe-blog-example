const { getArticle } = require("../../../helpers/db")

module.exports = (req, res) => {
  try {
    const art = getArticle(req.params.slug);
    if (!art)
      return res.status(404).json({
        error: true,
        errormsg: "Article not found",
        errorcode: 404,
      });
    res.status(200).json({
      error: false,
      article: art,
    });
  } catch {
    res.status(500).json({
      error: true,
      errormsg: "Internal Server Error",
      errorcode: 500,
    });
  }
};
