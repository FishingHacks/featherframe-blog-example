import { render, setTitle, html, requireCSS } from "/framework";

import Navbar from "/components/navbar.js";

requireCSS("/styles.css");

setTitle("Blog");

render(()=>html`
    <${Navbar} />
    <h2>This site is not filled with Content</h2>
    `
)