import {
  html,
  setTitle,
  matchpath as mp,
  useRef,
  useEffect,
} from "/framework";

setTitle("Blog");

const SLUG = mp("/article/:slug", window.location.pathname).slug;
export async function render() {
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
    article = fetchedArticle.article;
  }

  function resolveWhenExists(r, str) {
    return () => {
      if (window[str]) r(window[str]);
      else setTimeout(resolveWhenExists(r, str), 50);
    };
  }

  function waitForExistence(name) {
    return new Promise((r) => {
      if (window[name]) r(window[name]);
      setTimeout(resolveWhenExists(r, name), 50);
    });
  }

  const ref = useRef(null);

  useEffect(async () => {
    let m = await waitForExistence("marked");
    ref.current.innerHTML = m.parse("    " + article.content);
  }, Date.now());

  if (error)
    return html`
      <div class="spacing smol"></div>
      <h1>An Error occured!</h1>
      <p>Error: ${errormsg}</p>
    `;
  else
    return html`
      <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      <div class="spacing smol"></div>
      <div class="article-big">
        <div>
          <div class="h1"><h1>${article.title}</h1></div>
          <img src="${article.img}" />
        </div>
        <div class="content" ref=${ref}>Loading...</div>
        <div style="margin-top: 6em; width: 100%" />
        ${(await window.cookieStore.get("auth"))?.value
          ? html`<button
              class="btn-delete"
              onclick=${() => (window.location = "/deleteArticle?slug=" + SLUG)}
            >
              Delete
            </button>`
          : []}
      </div>
    `;
}
