import { html } from "/framework";

import loginForm from "../components/loginForm.js";

export async function render() {
  return html`<${loginForm} />`;
}
