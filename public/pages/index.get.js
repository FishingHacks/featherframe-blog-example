import { html, render, requireCSS, setTitle } from "/framework";

import Article from "../components/article.js";
import Navbar from "../components/navbar.js";

// Because this is global, i should've put it into the index.html file, but I mean, idc

requireCSS("/styles.css");

setTitle("Blog");

(async function () {
  let _articles = await fetch(window.location.origin + "/api/articles");

  let articles = await _articles.json();

  let _fetchedArticles = await Promise.all(articles.map(el=>fetch(window.location.origin + "/api/article/"+el)));

  let fetchedArticles = await Promise.all(_fetchedArticles.map(el=>el.json()));

  fetchedArticles = fetchedArticles.map(art=>art.error?art:art.article);

  render(
    () => html`
      <${Navbar} />
      <div class="spacing"></div>
      <div class="articles">
        ${
          fetchedArticles.map(art => {
            return html`<${Article} img="${art.img}" title="${art.title}" slug="${art.slug}" headline="${art.headline}" />`
          })
        }
      </div>
    `
  );
})();
