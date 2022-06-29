import { setTitle, html } from "/framework";

setTitle("Blog");

export async function render() {
  return html`<div
    style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center;"
  >
    <h2>This site is not filled with Content</h2>
  </div>`;
}
