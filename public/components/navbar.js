import { html } from "/framework";

export default function Navbar() {
  return html`
    <nav>
      <li><a class="title">Blog</a></li>
      <li style="float: right"><a class="${window.location.pathname=="/impress"?"active":""}" href="/impress">Impressum</a></li>
      <li style="float: right"><a class="${window.location.pathname.startsWith("/article/")?"active":""}" href="#">Article</a></li>
      <li style="float: right"><a class="${window.location.pathname=="/"?"active":""}" href="/">Home</a></li>
    </nav>
  `;
}
