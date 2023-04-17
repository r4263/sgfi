const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./models");
db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// para requests do tipo json
app.use(bodyParser.json());

// para requests do tipo urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// rota simples
app.get("/", (req, res) => {
  res.json({ message: "Olá mundo" });
});

// porta 8080, escutando
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});