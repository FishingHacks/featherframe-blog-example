const { html, redirect } = require("featherframe");

export default function Article(props = {}) {
  if (
    props.img &&
    props.title &&
    props.slug &&
    props.i != null &&
    props.i != undefined &&
    !isNaN(Number(props.i))
  ) {
    return html`<div
      class="article art--${Math.floor((Number(props.i) % 3) + 1)}"
      onclick=${() => redirect(location.origin + "/article/" + props.slug)}
    >
      <img src="${props.img}" alt="Title Image" />
      <h4 class="title">${props.title}</h4>
    </div>`;
  } else {
    return html`
      <div class="article art--3">
        <h1>Error: Couldn't load Article properly</h1>
      </div>
    `;
  }
}
