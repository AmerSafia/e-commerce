
const express = require("express");
const Mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require("cors");
const config = require('config');

const app = express();
const port = 5000;

Mongoose.connect(config.DATABASE.host,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to database ");
    }
  }
);
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());


//import api
const userRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");


app.use('/api', productRoutes)
app.use("/api", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port} `)
})