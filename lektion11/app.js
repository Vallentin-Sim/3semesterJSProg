const figlet = require("figlet");
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
    res.write(await doStuff());
    res.end();
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})

async function doStuff() {
  const text = await figlet.text("Hello World!!");
  return text;
}
