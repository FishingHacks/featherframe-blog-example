const { emitWarning } = require("process");
const { user } = require("../../blog-config");

module.exports = (req, res) => {
  if (
    req?.body?.username == user.name &&
    req?.body?.password == user.password
  ) {
      res.cookie("auth", true);
      res.status(404).redirect("http://localhost:8080/");
  } else {
    res.redirect("/login-failed");
  }
};
