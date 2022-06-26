const { users } = require("../../blog-config");
const { setToken } = require("../../helpers/db");
const crypto = require("crypto");

module.exports = (req, res) => {
  if (
    users.find(el=>el.name == req?.body?.username) &&
    users.find(el=>el.password == req?.body?.password)
  ) {
    let token = crypto.randomUUID();
    setToken(token);
    res.cookie("auth", token);
    res.status(404).redirect("http://localhost:8080/");
  } else {
    res.redirect("/login-failed");
  }
};
