const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const filename = "data.json";
require("dotenv").config();

app.use(cors());
app.use(express.json());

const backendUrl = `https://${process.env.CODESPACE_NAME}-${process.env.HOST_PORT}.app.github.dev`;

app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
  console.log("Testing VMInfo");
  if (fs.existsSync(filename)) {
    const jsonData = fs.readFileSync(filename, "utf8");
    res.status(200).send(`
      <h1>${backendUrl}</h1>
      <code>${jsonData}</code>
    `);
  } else {
    res.status(404).send(`
      <h1>${backendUrl}</h1>
      <hr
      <h3>Ready to send the validation data</h3>
      <h3>Listo para enviar la información de validación</h3>
    `);
  }
});

app.post("/", async (req, res) => {
  console.log("Receiving data");
  let data=req.body
  fs.writeFileSync(filename, JSON.stringify(data), "utf8");
  res.status(200).send({ message: "JSON saved successfully" });
});

app.listen(process.env.HOST_PORT, () => {
  console.log("Your URL for the verification script is: " + backendUrl);
});
