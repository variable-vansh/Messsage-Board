const express = require("express");
const path = require("node:path");

const app = express();

app.use(express.urlencoded({ extended: true }));

const indexRouter=require("./routes/indexRouter")
const newRouter=require("./routes/newRouter")

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter)
app.use("/", indexRouter);




