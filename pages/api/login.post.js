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
    res.status(200).json({token, error: false});
  } else {
    res.status(300).json({error: true});
  }
};
