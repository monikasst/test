const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

//model listing
const Product = require("./model/Product");
const Country = require("./model/Country");
const multer = require('multer');
const upload = multer();
var path = require('path');
const formData = require('express-form-data');

//middlewares
app.use(express.json());

// Put these statements before you define any routes.
app.use(express.urlencoded());

// for parsing multipart/form-data
dotenv.config();

//connect to
mongoose.connect(`mongodb://localhost:27017/crud`, (err) => {
  if (err) throw err;
  console.log("DB Connected Successfully");
});
var port = process.env.PORT;

// Import routes
// app.use(upload.none());
// app.post('/api/country', upload.none(), (req, res) => {
//   console.log('djsjbd');
//   console.log('data', req.body);
//   res.setHeader('Content-Type', 'application/json');
//   res.send(req.body);
// });
const productRoutes = require("./routes/product");
const countryRoutes = require("./routes/country");

// route Middlewares
app.use("/api/products", productRoutes);

//for country image is pass on form-data
// app.use(formData.parse());
app.use("/api/country", countryRoutes);

app.listen(port, () => {
  console.log(`hello on port ${port}`);
});
//https://www.youtube.com/watch?v=gFUFMlf6asU
