const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();
var corsOptions = {
  origin: "http://localhost:8081"
};

//middleware
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();
//router
const router =require('./routes/userRouter')
app.use('/api/user',router);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Pagination application." });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
