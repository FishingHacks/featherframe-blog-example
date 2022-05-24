import { render, html } from "/framework";

import { loginForm } from "../components/loginForm";

render(()=>html`
<${loginForm} didntpass />
`)