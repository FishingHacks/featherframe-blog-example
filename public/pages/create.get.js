import { html, render, requireCSS, setTitle } from "/framework";

import Navbar from "../../components/navbar.js";

requireCSS("/styles.css");

setTitle("Blog");

render(async () => {
  if (!(await window.cookieStore.get("auth"))?.value) {
    window.location.href = window.location.origin + "?err=No+Access";
    return [];
  }

  return html`
    <${Navbar} />
    <div class="spacing" />
    <div class="body">
      <form action="/article/new" method="post">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title" />
        <br />
        <label for="content">Content (MD): </label>
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
        <br />
        <label for="img">Image: </label>
        <input type="url" name="img" id="img" />
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  `;
});
