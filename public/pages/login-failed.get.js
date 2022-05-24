import { render, html, requireCSS } from "/framework";

import loginForm from "../components/loginForm.js";
import Navbar from "../components/navbar.js"

requireCSS("/styles.css");

render(()=>html`
<${Navbar} />
<${loginForm} didntpass />
`)