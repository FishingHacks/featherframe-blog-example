import { render, html, App, requireCSS } from "/framework";
import Navbar from "./components/navbar.js";

requireCSS("/styles.css");

render(
  () => html`
  <${Navbar} />
  <${App} />
  `
);
