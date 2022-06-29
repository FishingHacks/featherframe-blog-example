import { html, redirect, createContext } from "/framework";
import Searchbar from "./search.js";

export default async function Navbar() {
  return html`
    <nav>
      <li><a class="title">Blog</a></li>
      <li style="float: right">
        <a
          class="${window.location.pathname == "/impress" ? "active" : ""}"
          href="/impress"
          >Impressum</a
        >
      </li>
      <${Searchbar} a="1" onsearch=${(async (search)=>{
        const request = await fetch(location.origin + "/api/searchArticles?q="+encodeURIComponent(search.replaceAll(" ", "+")));
        let data = null;
        try {
          data = await request.json();
        }
        catch (e) {return console.error("[ERR] an error occurred whilst trying to parse", e)}
        if (data?.error) return console.error("[ERR] An error occurred whilst trying to search: ", request.status, "(", request.statusText, ")");
        if (!data?.articles) return console.error("[ERR] No articles returned");
        createContext(data.articles, "articles");
        redirect(location.origin + "/search")
      })} b="1" />
      ${(await window.cookieStore.get("auth"))?.value
        ? html`<li style="float: right">
            <a
              class="${window.location.pathname == "/create" ? "active" : ""}"
              href="/create"
              >Create Article</a
            >
          </li>`
        : []}
      ${(await window.cookieStore.get("auth"))?.value
        ? html`<li style="float: right">
            <a
              onclick=${() => {
                cookieStore.delete("auth");
                setTimeout(() => redirect(window.location.origin), 30);
              }}
              style="cursor: pointer;"
              >Logout</a
            >
          </li>`
        : html`<li style="float: right">
            <a
              class="${window.location.pathname == "/login" ||
              window.location.pathname == "/login-failed"
                ? "active"
                : ""}"
              href="/login"
              >Login</a
            >
          </li>`}
      <li style="float: right">
        <a
          class="${window.location.pathname.startsWith("/article/")
            ? "active"
            : ""}"
          href="#"
          >Article</a
        >
      </li>
      <li style="float: right">
        <a class="${window.location.pathname == "/" ? "active" : ""}" href="/"
          >Home</a
        >
      </li>
    </nav>
  `;
}
