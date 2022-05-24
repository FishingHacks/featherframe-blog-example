import {
  html,
  render,
  requireCSS,
  setTitle,
  matchpath as mp,
} from "/framework";

import Navbar from "../../components/navbar.js";

requireCSS("/styles.css");

setTitle("Blog");

const SLUG = mp("/article/:slug", window.location.pathname).slug;
(async function () {
  let fetchedArticleRequest = await fetch(
    window.location.origin + "/api/article/" + SLUG
  );
  let fetchedArticle = await fetchedArticleRequest.json();

  let error = fetchedArticle.error;
  let errormsg = "";

  let article = {};

  if (error) {
    errormsg = fetchedArticle.errormsg;
  } else {
    console.log(fetchedArticle.article);
    article = fetchedArticle.article;
  }

  render(() => {
    if (error)
      return html`
        <${Navbar} />
        <div class="spacing smol"></div>
        <h1>An Error occured!</h1>
        <p>Error: ${errormsg}</p>
      `;
    else
      return html`
        <${Navbar} />
        <div class="spacing smol"></div>
        <h1>${article.title}</h1>
        <h3>${article.headline}</h3>
        <p>${article.content}</p>
      `;
  });
})();
