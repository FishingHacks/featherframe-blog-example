import { html } from "/framework";

export default function loginForm(props = {}) {
  return html`
  <style>body {overflow: hidden}</style>
    <div class="loginForm">
      <form action="/api/login" method="post">
        ${props.didntpass
          ? html`
              <b
                style="background-color: red; padding: 10px; border-radius: 15px; width: max-content; color: white;"
                >[!] The username or password is wrong</b>
            `
          : ""}
          <br />
          <label for="username">Username: </label>
          <input type="text" name="username" />
          <br />
          <label for="password">Password: </label>
          <input type="password" name="password" />
          <br />
          <button type="submit">Log in</button>
      </form>
    </div>
  `;
}
