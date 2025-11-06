const express = require("express");
const app = express();
const { mongoose } = require("./db/mongoose");
const bodyParser = require("body-parser");

/** Load the express middleware */
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**EVERYTHING IS HERE */
app.get("/", (req, res) => {
  res.send("Your server is running");
});

/*TASKS ROUTES */
app.use("/tasks", require("./routes/tasks.routes"));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
