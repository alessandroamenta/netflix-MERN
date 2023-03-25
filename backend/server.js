const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://sandro:sandro123@cluster0.vmk2hrx.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);


const port = process.env.PORT || 5050;


app.listen(port, () => {
  console.log("server started on port 5050");
});
