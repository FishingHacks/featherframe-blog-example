const { readFileSync } = require("fs");
const { join } = require("path");

module.exports = (path)=>({
    name: "Blog",
    description: "An example for lightapp",
    customHTML: readFileSync(join(path, "index.html")).toString(),
});