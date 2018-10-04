const express = require("express");
const mongoose = require("mongoose"); // we could also use mongodb driver
const bodyParser = require("body-parser");
const db = require("./config/dbConfig").URI;
const tasks = require("./routes/apis/tasks");

let app = express();

app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => {
    console.log("db connected");
  })
  .catch(err => {
    console.log(`${err}`);
  });

//routes
app.use("/api/tasks", tasks);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
