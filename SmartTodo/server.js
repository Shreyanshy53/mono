require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/auth", require("./src/routes/auth.routes"));
app.use("/tasks", require("./src/routes/task.routes"));
app.use("/user", require("./src/routes/user.routes"));


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
