import { html } from "/framework";

export default function Article(props = {}) {
  if (props.img && props.title && props.headline && props.slug) {
    return html` <div
      class="article"
      style="background-image: url('${props.img}')"
    >
      <div class="shadow">
        <h4 class="title">${props.title}</h4>
        <b class="headline">${props.headline}</b>
        <br />
        <br />
        <a href="/article/${props.slug}">Read More >></a>
      </div>
    </div>`;
  } else {
    // console.log(props)
    return html`
      <div class="article">
        <h1>Error: Couldn't load Article properly</h1>
      </div>
    `;
  }
}
