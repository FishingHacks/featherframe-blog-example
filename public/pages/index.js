const { html, setTitle } = require("featherframe");

import Article from "../components/article.js";

setTitle("Blog");

export async function render() {
  let _articles = await fetch(window.location.origin + "/api/articles");

  let articles = await _articles.json();

  let _fetchedArticles = await Promise.all(
    articles.map((el) => fetch(window.location.origin + "/api/article/" + el))
  );

  let fetchedArticles = await Promise.all(
    _fetchedArticles.map((el) => el.json())
  );

  fetchedArticles = fetchedArticles.map((art) =>
    art.error ? art : art.article
  );

  return html`
    ${new URL(window.location.href).searchParams.get("err")
      ? html`<div class="err">
          Error: ${new URL(window.location.href).searchParams.get("err")}
        </div>`
      : []}
    <div class="spacing"></div>
    <div class="articles">
      ${fetchedArticles.length > 0
        ? fetchedArticles.map((art, i) => {
            return html`<${Article}
              i=${i}
              img="${art.img}"
              title="${art.title}"
              slug="${art.slug}"
            />`;
          })
        : html`<h1>No Articles were found</h1>`}
    </div>
  `;
}
