const express = require("express");
require("dotenv/config");
const colors = require("colors");
const bodyParser = require("body-parser");
const db = require("./database/db");
const app = express();
const todoRoute = require("./routes/todoRoutes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.connect((err) => {
  if (!err) {
    console.log(`DB mysql connect successfully!`.yellow.italic);
  } else {
    console.log(`DB connection failed Error: ${err}`);
    process.exit(1);
  }
});

app.use("/api/todos", todoRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running on port ${PORT}`.cyan.bold));
