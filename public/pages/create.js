const { html, setTitle } = require("featherframe");
setTitle("Blog");

export async function render () {
  if (!(await window.cookieStore.get("auth"))?.value) {
    window.location.href = window.location.origin + "?err=No+Access";
    return [];
  }

  return html`
    <div class="spacing" />
    <div class="body">
      <form action="/article/new" method="post">
        <label for="title">Title: </label>
        <input class="input" type="text" name="title" id="title" />
        <br />
        <label for="content">Content (MD): </label>
        <textarea name="content" class="input" id="content" cols="30" rows="10"></textarea>
        <br />
        <label for="img">Image: </label>
        <input type="url" name="img" class="input" id="img" />
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  `;
}