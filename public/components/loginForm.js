export function loginForm (props={}){
    return html`
    ${(typeof props.didntpass)?html`
    <div style="background-color: red; margin: 20px; border-radius: 15px;">[!] The username or password is wrong</div>
    `:null}
    `
}