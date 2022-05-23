import { html } from "/framework";

export default function Article(props = {}) {
  props = {
    img: "https://picsum.photos/900/500",
    title: "Lorem Ipsum dolor sit amet, consectetur abc",
    slur: "1-lorem-ipsum-dolor-sit-amet-consecetur-abc",
    headline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare purus urna, non pulvinar felis vulputate eget. Quisque tincidunt tortor ante, eget sodales nisl malesuada pellentesque. Cras bibendum volutpat metus, eu tempus diam pharetra vel. Sed.",
  };
  if (props.img && props.title && props.headline && props.slur) {
    return html` <div
      class="article"
      style="background-image: url('${props.img}')"
    >
      <div class="shadow">
        <h4 class="title">${props.title}</h4>
        <b class="headline">${props.headline}</b>
        <br />
        <br />
        <a href="${props.slur}">Read More >></a>
      </div>
    </div>`;
  } else {
    return html`
      <div class="article">
        <h1>Error: Couldn't load Article properly</h1>
      </div>
    `;
  }
}
