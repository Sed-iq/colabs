const express = require("express");
const app = express();
const path = require("path");
app.use("/assets", express.static(path.join(__dirname + "/dist/assets")));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
app.listen(process.env.PORT || 5000, console.log("Running"));
