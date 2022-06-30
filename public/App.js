const { render, html, App, requireCSS } = require("featherframe");
import Navbar from "./components/navbar.js";

requireCSS("/styles.css");

render(
  () => html`
  <${Navbar} />
  <${App} />
  `
);
