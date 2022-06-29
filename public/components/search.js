import { html, useRef } from "/framework";

export default function Searchbar({
  class: cls = "",
  style = "",
  onsearch,
  ...other
}) {
  if (cls instanceof Array) cls = cls.join(" ");
  if (cls.length > 0) cls = " " + cls;
  if (typeof style == "object") {
    let vals = Object.values(style);
    let keys = Object.keys(style);
    style = "";
    keys.forEach((el, i) => {
      style += el + ": " + vals[i] + ";";
    });
  }

  const inputref = useRef(null);

  return html` <style>
      .asdjjaskdjaskdjsdifsdjkfnajshdjashduiasdhajsdasdassdgfkjhashdjkashfjksdfknbvjsd:focus {
        color: 00b4cc;
      }
    </style>

    <li
      class="navitem${cls}"
      style="width: 50%; height: 100%; display: flex; align-items: center; margin-left: 3em;${style}"
      ...${other}
    >
      <div style="width: 100%;position: relative;display: flex;">
        <input
          ref=${inputref}
          onkeydown=${(e) => {
            if (typeof onsearch == "function")
              if (e.keyCode == 13)
                onsearch(inputref.current?.value || "", inputref.current);
          }}
          type="text"
          class="asdjjaskdjaskdjsdifsdjkfnajshdjashduiasdhajsdasdassdgfkjhashdjkashfjksdfknbvjsd"
          style="width: 100%;border: 3px solid #00b4cc;border-right: none;padding: 5px;height: 20px;border-radius: 5px 0 0 5px;outline: none;color: darkolivegreen;"
          placeholder="What post are you looking for?"
        />
        <button
          onclick=${() =>
            typeof onsearch == "function"
              ? onsearch(inputref.current?.value || "", inputref.current)
              : () => {}}
          type="submit"
          style="width: 40px;height: 36px;border: 1px solid #00b4cc;background: #00b4cc;text-align: center;color: #fff;border-radius: 0 5px 5px 0;cursor: pointer;font-size: 20px;"
        >
          <i class="fa fa-search"></i>
        </button>
      </div>
    </li>`;
}
