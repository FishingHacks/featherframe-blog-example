import { html, setTitle, useContext, redirect } from "/framework";

import Article from "../components/article.js";

setTitle("Blog");

export async function render() {
  const fetchedArticles = useContext("articles")

  if (!fetchedArticles) return redirect(location.origin);

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
