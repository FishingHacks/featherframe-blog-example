const { redirect } = require("featherframe");
import { html, useRef } from "/framework";

export default function loginForm(props = {}, children) {
  try {
    const userRef = useRef(null);
    const passwordRef = useRef(null);

    return html`
      <style>
        body {
          overflow: hidden;
        }
      </style>
      <div class="loginForm">
        <form action="/api/login" method="post">
          ${props.didntpass
            ? html`
                <b
                  style="background-color: red; padding: 10px; border-radius: 15px; width: max-content; color: white;"
                  >[!] The username or password is wrong</b
                >
              `
            : ""}
          <br />
          <label for="username">Username: </label>
          <input type="text" name="username" ref=${userRef} />
          <br />
          <label for="password">Password: </label>
          <input type="password" name="password" ref=${passwordRef} />
          <br />
          <button
            onclick=${async (e) => {
              e.preventDefault();
              const user = userRef?.current?.value;
              const password = passwordRef?.current?.value;

              const data = await fetch(location.origin + "/api/login", {
                method: "post",
                body: "username="+encodeURIComponent(user)+"&password="+encodeURIComponent(password),
                headers: {
                  "Content-Type": 'application/x-www-form-urlencoded'
                }
              }).then(data=>data.json());
              if (data.error) return redirect(window.location.origin + "?error=Wrong+credentials");
              else if (data.token) cookieStore.set("auth", data.token);
              else return redirect(window.location.origin + "?error=Wrong+credentials");
              return redirect(window.location.origin);
            }}
          >
            Log in
          </button>
        </form>
      </div>
      ${children}
    `;
  } catch (e) {
    console.error("error in loginForm", e);
  }
}
