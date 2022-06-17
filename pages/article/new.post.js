const { addArticle, verifyToken } = require("../../helpers/db");

const replaceAllRegex = /[^a-zA-Z ]/g;
const multipleWhiteSpacesToOne = / +/g;

module.exports = (req, res) => {
  if (
    req.body?.title &&
    req.body?.content &&
    req.body?.img &&
    typeof req.body?.img == "string" &&
    typeof req.body.title == "string" &&
    typeof req.body.img == "string" &&
    req.cookies?.auth &&
    verifyToken(req.cookies?.auth)
  ) {
    let title = req.body.title;
    let img = req.body.img;
    let content = req.body.content
    let slug = title
      .replaceAll(replaceAllRegex, "")
      .substring(0, 20)
      .replaceAll(multipleWhiteSpacesToOne, "-");
    addArticle({title, img, content, slug});
    res.redirect("/article/"+slug);
  } else {
    res.redirect("/?err=Failed+to+create+article");
  }
};
