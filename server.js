const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // set maximum file size limit to 10 MB
  server.use(bodyParser.json({ limit: "10mb" }));
  server.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

  // handle all other requests using Next.js
  server.all("*", (req, res) => handle(req, res));

  server.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
});
