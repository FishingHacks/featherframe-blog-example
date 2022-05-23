import { html, render, requireCSS, setTitle } from "/framework";

import Article from "/components/article.js";

requireCSS("/styles.css");

setTitle("Blog")

console.log(
  Article({
    title: "abc",
    headline: "def",
    img: "/art1.jpg",
  })
)

render(()=>html`
  <nav>
    <li><a class="title">Blog</a></li>
    <li style="float: right"><a href="/impress">Impressum</a></li>
    <li style="float: right"><a class="active" href="/">Home</a></li>
  </nav>
  <div class="spacing"></div>
  <div class="articles">
    <${Article}/>
    <${Article}/>
    <${Article}/>
    <${Article}/>
    <${Article}/>
    <${Article}/>
  </div>
`);
