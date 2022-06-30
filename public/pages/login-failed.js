const { html } = require("featherframe");

import loginForm from "../components/loginForm.js";

export async function render() {
  return html`<${loginForm} didntpass />`;
}
