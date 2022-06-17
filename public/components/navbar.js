import { html } from "/framework";

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
      ${(await window.cookieStore.get("auth"))?.value
        ? html`<li style="float: right">
            <a
              class="${window.location.pathname == "/creare" ? "active" : ""}"
              href="/create"
              >Create Article</a
            >
          </li>`
        : []}
      ${(await window.cookieStore.get("auth"))?.value
        ? html`<li style="float: right">
            <a href="/logout">Logout</a>
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
