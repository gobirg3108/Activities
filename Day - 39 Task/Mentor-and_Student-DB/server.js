const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mentorRoutes = require("./routes/mentor.routes");
const studentRoutes = require("./routes/student.routes");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/mentors", mentorRoutes);
app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Mango DB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
