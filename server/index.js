const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const access_token = require("../env.json").access_token;
const morgan = require('morgan');
const mercadopago = require('mercadopago');

const mongoose = require("mongoose");
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false, useCreateIndex:true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/users', require('./routes/users'));
app.use('/api/product', require('./routes/product'));

mercadopago.configure({access_token});

const elPath = path.join(__dirname, '..', '/uploads')
console.log("DIRNAME: " + __dirname)
console.log("EL PATH: " + elPath)

//app.use(express.static(elPath));
app.use('/uploads', express.static(elPath))

if (process.env.NODE_ENV === "production" || require("../env.json").ENV === "prod" ) {
  const pathProd = path.join(__dirname, '../client/build');
  console.log("PATH PRODUCCIÓN: ", pathProd);
  app.use(express.static(pathProd));

  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
  });
};

const PORT_BACKEND = require('../env.json').PORT_BACKEND;
const port = process.env.PORT || PORT_BACKEND;

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});


// console.log(new Date().toISOString().slice(0, -1) + "-04:00")
// console.log(new Date(+ Date.now() + 900000000).toISOString())
