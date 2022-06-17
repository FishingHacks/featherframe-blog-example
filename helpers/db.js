const Enmap = require("enmap");

const db = new Enmap({
  name: "Database",
  autoFetch: true,
  fetchAll: false,
});

function addArticle(article) {
  let arts = db.get("articles") || [];
  arts.push(article);
  db.set("articles", arts);
}

function removeArticle(slug) {
  let arts = db.get("articles") || [];
  arts = arts.filter((el) => el.slug != slug);
  db.set("articles", arts);
}

function getArticle(slug) {
  return db.get("articles").find((el) => el.slug == slug);
}

function listArticles() {
  return db.get("articles");
}

function setToken(token) {
  let tokens = db.get("token") || [];
  if (!(tokens instanceof Array)) tokens = [];
  tokens.push(token);
  db.set("token", tokens);
}

function resetToken(token) {
  let tokens = db.get("token") || [];
  if (!(tokens instanceof Array)) tokens = [];
  db.set(
    "token",
    tokens.filter((el) => el != token)
  );
}

function verifyToken(token) {
  let _token = db.get("token").find?.((el) => el == token);
  return _token != null && _token != undefined;
}

module.exports = {
  addArticle,
  removeArticle,
  getArticle,
  listArticles,
  setToken,
  resetToken,
  verifyToken,
};
